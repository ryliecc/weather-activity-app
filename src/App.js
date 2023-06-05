import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { uid } from "uid";
import Form from "./components/Form.js";
import ActivityList from "./components/ActivityList.js";
import Header from "./components/Header.js";
import "./App.css";
import React from "react";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: {
      location: "Europe",
      temperature: 7,
      condition: "🌧️",
      isGoodWeather: false,
    },
  });

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();
      setWeather(weather);
    }
    startFetching();
    const fetchIntervId = setInterval(startFetching, 5000);
    return () => {
      clearInterval(fetchIntervId);
    };
  });

  function handleDeteleActivity(toDelete) {
    const updatedActivities = activities.filter(
      (activity) => activity.id !== toDelete
    );
    setActivities(updatedActivities);
    console.log(activities);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newActivity = {
      id: uid(),
      name: form.elements.name.value,
      isForGoodWeather: form.elements.checkbox.checked,
    };
    setActivities([...activities, newActivity]);
    console.log(activities);
    form.reset();
    form.name.focus();
  }

  if (!activities || !weather) {
    return;
  }

  const fittingActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  return (
    <>
      <Header
        symbol={weather.condition}
        degreeNumber={weather.temperature}
        isGoodWeather={weather.isGoodWeather}
      />
      <ActivityList
        listitems={fittingActivities}
        onDeleteActivity={handleDeteleActivity}
      />
      <Form onSubmit={handleSubmit} />
    </>
  );
}

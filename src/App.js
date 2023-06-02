import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form.js";
import ActivityList from "./components/ActivityList.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Temperature from "./components/Temperature.js";
import Text from "./components/Text.js";
import WeatherSymbol from "./components/WeatherSymbol.js";
import "./App.css";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", []);
  const [weather, setWeather] = useLocalStorageState("weather", false);
  const [sunnyActivities, setSunnyActivities] = useLocalStorageState(
    "sunnyActivities",
    []
  );

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();
      setWeather(weather);
    }
    startFetching();
    console.log(weather);
  }, [setWeather, weather]);

  useEffect(() => {
    const newSunnyActivities = activities.filter(
      (activity) => activity.isForGoodWeather === isGoodWeather
    );
    setSunnyActivities(newSunnyActivities);
    console.log(activities);
    console.log(sunnyActivities);
  }, [activities, setSunnyActivities, sunnyActivities]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newActivity = {
      id: uid(),
      name: form.elements.name.value,
      isForGoodWeather: form.elements.checkbox.checked,
    };
    if (activities.length >= 0) {
      setActivities([newActivity, ...activities]);
    } else {
      setActivities([newActivity]);
    }
    form.reset();
    form.name.focus();
  }

  return (
    <>
      <Header>
        <WeatherSymbol />
        <Temperature />
        <Text isGoodWeather={isGoodWeather} />
      </Header>
      <Main>
        <ActivityList listitems={sunnyActivities} />
        <Form onSubmit={handleSubmit} />
      </Main>
    </>
  );
}

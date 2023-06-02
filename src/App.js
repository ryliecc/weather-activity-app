import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form.js";
import ActivityList from "./components/ActivityList.js";
import DeleteButton from "./components/DeleteButton.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Temperature from "./components/Temperature.js";
import Text from "./components/Text.js";
import WeatherSymbol from "./components/WeatherSymbol.js";
import "./App.css";

export default function App() {
  // Hilfsfunktionen für Local Storage
  /* function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  } */

  const [activities, setActivities] = useLocalStorageState("activities", []);
  const isGoodWeather = true;

  const [sunnyActivities, setSunnyActivities] = useLocalStorageState(
    "sunnyActivities",
    []
  );

  useEffect(() => {
    const newSunnyActivities = activities.filter(
      (activity) => activity.isForGoodWeather === isGoodWeather
    );
    setSunnyActivities(newSunnyActivities);
    console.log(activities);
    console.log(sunnyActivities);
  }, [activities, isGoodWeather, setSunnyActivities, sunnyActivities]);

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
        <Text />
      </Header>
      <Main>
        <ActivityList listitems="sunnyActivities">
          <DeleteButton />
        </ActivityList>
        <Form onSubmit={handleSubmit} />
      </Main>
    </>
  );
}

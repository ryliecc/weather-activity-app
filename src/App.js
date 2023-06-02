import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form.js";
import ActivityList from "./components/ActivityList.js";
import Activity from "./components/Activity.js";
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

  useEffect(() => {
    console.log(activities);
  }, [activities]);

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
        <ActivityList>
          <Activity>
            <DeleteButton />
          </Activity>
        </ActivityList>
        <Form onSubmit={handleSubmit} />
      </Main>
    </>
  );
}

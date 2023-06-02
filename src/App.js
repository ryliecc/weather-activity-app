import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import Form from "./components/Form.js";
import ActivityList from "./components/ActivityList.js";
import "./App.css";

export default function App() {
  const [activities, setActivities] = useLocalStorageState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setActivities(
      {
        id: uid(),
        name: form.name.value,
        isForGoodWeather: form.checkbox.checked,
      },
      ...activities
    );
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
          {activities.map(({ id, name }) => {
            <Activity key={id} activityName={name}>
              <DeleteButton />
            </Activity>;
          })}
        </ActivityList>
        <Form onSubmit={handleSubmit} />
      </Main>
    </>
  );
}

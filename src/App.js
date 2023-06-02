import Form from "./components/Form.js"
import './App.css';
im

export default function App() {
  return (
  <Header>
    <WeatherSymbol />
    <Temperature />
    <Text />
  </Header>
  <Main>
    <ActivityList>
      <Activity>
        <Text />
        <DeleteButton />
    </Activity>
    </ActivityList>
    <Form onSubmit={handleSubmit}/>
    </Main>

  );
}

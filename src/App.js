import logo from './logo.svg';
import './App.css';

function App() {
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
    <Form>
      <Heading />
      <Input />
      <Input />
      <Button />
    </Form>
    </Main>

  );
}

export default App;

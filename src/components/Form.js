export default function Form({ onSubmit }) {
  return (
    <form>
      <h3>Add new Activity!</h3>
      <label for="name">Name:</label>
      <input type="text" id="name" />
      <label for="checkbox">Good-weather activity:</label>
      <input type="checkbox" id="checkbox" />
      <button>Submit</button>
    </form>
  );
}

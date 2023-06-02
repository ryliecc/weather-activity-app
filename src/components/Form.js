export default function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h3>Add new Activity!</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <label htmlFor="checkbox">Good-weather activity:</label>
      <input type="checkbox" id="checkbox" />
      <button>Submit</button>
    </form>
  );
}

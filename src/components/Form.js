export default function Form({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="activity-form">
      <h3 className="activity-form__title">Add new Activity!</h3>
      <label htmlFor="name" className="activity-form__name-label">
        Name:
      </label>
      <input type="text" id="name" className="activity-form__name-input" />
      <label htmlFor="checkbox" className="activity-form__checkbox-label">
        Good-weather activity:
      </label>
      <input
        type="checkbox"
        id="checkbox"
        className="activity-form__checkbox-input"
      />
      <button className="activity-form__submit-button">Submit</button>
    </form>
  );
}

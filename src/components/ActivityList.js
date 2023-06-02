export default function ActivityList({ listitems }) {
  return (
    <ul className="activity-list">
      {listitems.map((listitem) => {
        return (
          <li
            key={listitem.key}
            id={listitem.key}
            className="activity-list__listitem"
          >
            <p className="activity-list__listitem--name">{listitem.name}</p>
            <button
              type="button"
              className="activity-list__listitem--delete-button"
            >
              🚮
            </button>
          </li>
        );
      })}
    </ul>
  );
}

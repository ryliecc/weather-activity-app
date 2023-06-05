import React from "react";

export default function ActivityList({ listitems, onDeleteActivity }) {
  return (
    <ul className="activity-list">
      {listitems.map((listitem) => {
        return (
          <li
            key={listitem.id}
            id={listitem.id}
            className="activity-list__listitem"
          >
            <p className="activity-list__listitem--name">{listitem.name}</p>
            <button
              type="button"
              className="activity-list__listitem--delete-button"
              onClick={() => onDeleteActivity(listitem.id)}
            >
              🚮
            </button>
          </li>
        );
      })}
    </ul>
  );
}

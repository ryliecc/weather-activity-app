import { useEffect } from "react";

export default function ActivityList({ listitems, children }) {
  return (
    <ul>
      {useEffect(() => {
        listitems.map((listitem) => {
          return (
            <li key={listitem.key} id={listitem.key}>
              <p>{listitem.name}</p>
              {children}
            </li>
          );
        });
      }, [children, listitems])}
    </ul>
  );
}

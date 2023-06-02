export default ActivityList({key, activityName, children}) {
    return <li key={key} id={key}><p>{activityName}</p>{children}</li>
}
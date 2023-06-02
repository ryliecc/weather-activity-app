export default function Header({ children }) {
  return (
    <header className="header">
      <h1 className="title">Activity & Weather App</h1>
      {children}
    </header>
  );
}

export default function Text({ isGoodWeather }) {
  if (isGoodWeather === true) {
    return <p className="text">The weather is awesome! Go outside and...</p>;
  } else {
    return (
      <p className="text">Bad weather outside! Here's what you can do now:</p>
    );
  }
}

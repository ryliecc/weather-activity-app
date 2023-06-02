export default function Text({ isGoodWeather }) {
  if (isGoodWeather === true) {
    return <p>The weather is awesome! Go outside and...</p>;
  } else {
    return <p>Bad weather outside! Here's what you can do now:</p>;
  }
}

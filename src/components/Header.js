import React from "react";

export default function Header({ symbol, degreeNumber, isGoodWeather }) {
  let text;
  if (isGoodWeather === true) {
    text = "The weather is awesome! Go outside and...";
  } else {
    text = "Bad weather outside! Here's what you can do now:";
  }

  return (
    <header className="header">
      <h1 className="title">Activity & Weather App</h1>
      <p className="header__weather-symbol">{symbol}</p>
      <span className="header__temperature">{degreeNumber}°C</span>
      <p className="text">{text}</p>
    </header>
  );
}

// WeatherDisplay.js
import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY; // Use environment variable

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
          .then((response) => response.json())
          .then((data) => setWeather(data))
          .catch((error) => console.error('Weather API error:', error));
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
      <p className="text-lg font-semibold">Current Weather</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
import React from "react";
import "./WeatherDetails.css";
// import WeatherLogo from "../assets/WeatherLogo.png";

const WeatherDetails = ({ WeatherData }) => {
  if (!WeatherData) {
    return <div className="loading">Loading weather data...</div>;
  }

  // Destructure the relevant properties from the WeatherData object
  const {
    location,
    current: {
      last_updated,
      temp_c,
      temp_f,
      condition: { text, icon },
      wind_mph,
      wind_kph,
      wind_degree,
      wind_dir,
      pressure_mb,
      pressure_in,
      precip_mm,
      precip_in,
      humidity,
      cloud,
      feelslike_c,
      feelslike_f,
      vis_km,
      vis_miles,
      uv,
      gust_mph,
      gust_kph,
    },
  } = WeatherData;

  return (
    <div className="weather-details-container">
      <div className="weather-details-box">
        {/* <img className="weather-logo" src={WeatherLogo} alt="Weather Logo" /> */}
        <div className="current-weather">
          <h2 className="text">CURRENT WEATHER</h2>
          <div className="current-weather-details">
            <div className="current-weather-location">
              <span className="text-heading">{`${location.name}, ${location.region}, ${location.country}`}</span>
              <span className="text">{last_updated}</span>
            </div>
            <div className="current-weather-temp">
              <span className="text-heading">
                {temp_c}°C / {temp_f}°F
              </span>
              <span className="text">{text}</span>
            </div>
            <img className="weather-icon" src={icon} alt={text} />
          </div>
          <div className="air-conditions">
            <h2 className="text">AIR CONDITIONS</h2>
            <div className="air-condition-details">
              <div className="air-condition-wind">
                <span className="text-heading-2">Wind</span>
                <span className="text-heading">
                  {wind_mph} mph / {wind_kph} kph
                </span>
              </div>
              <div className="air-condition-wind">
                <span className="text-heading-2">Real Feel</span>
                <span className="text-heading">{wind_degree}°</span>
              </div>
              <div className="air-condition-wind">
                <span className="text-heading-2">Gust Speed</span>
                <span className="text-heading">
                  {gust_mph} mph / {gust_kph} kph
                </span>
              </div>
            </div>
          </div>
          <div className="air-conditions">
            <h2 className="text">HUMIDITY & CLOUD</h2>
            <div className="humidity-cloud-details">
              <div className="air-condition-wind">
                <span className="text-heading-2">Humidity</span>
                <span className="text-heading">{humidity}%</span>
              </div>
              <div className="air-condition-wind">
                <span className="text-heading-2">Cloud Cover</span>
                <span className="text-heading">{cloud}%</span>
              </div>
              <div className="air-condition-wind">
                <span className="text-heading-2">Pressure</span>
                <span className="text-heading">
                  {pressure_mb} mb / {pressure_in} in
                </span>
              </div>
            </div>
          </div>
          <div className="air-conditions">
            <h2 className="text">FORECAST</h2>
            <div className="forecast-details">
              <div className="air-condition-wind">
                <span className="text-heading-2">Precipitation</span>
                <span className="text-heading">
                  {precip_mm} mm / {precip_in} in
                </span>
              </div>
              <div className="air-condition-wind">
                <span className="text-heading-2">Feels Like</span>
                <span className="text-heading">
                  {feelslike_c}°C / {feelslike_f}°F
                </span>
              </div>
              <div className="air-condition-wind">
                <span className="text-heading-2">Visibility</span>
                <span className="text-heading">
                  {vis_km} km / {vis_miles} miles
                </span>
              </div>
              <div className="air-condition-wind">
                <span className="text-heading-2">UV Index</span>
                <span className="text-heading">{uv}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

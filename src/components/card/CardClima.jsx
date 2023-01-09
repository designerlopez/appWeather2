import React, { useState } from "react";
import getApiWeather from "../utils/getApiWeather";
import "./style/styleCardClima.css";

const CardClima = () => {
  const { resWeather } = getApiWeather();

  const [celcius, setCelcius] = useState(true); //cambiamos el estado, si es true va a ser celcius, si no, Fahrenheit

  const temC = (resWeather?.main.temp - 273.15).toFixed(1); // obtengo la temp en celcius

  const temF = (((resWeather?.main.temp - 273.15) * 9) / 5 + 32).toFixed(1); // aca convierto a Fahrenheit

  return (
    <article className="card-weather">
      <section className="header">
        <h1 className="title">Weather App</h1>
        <h2 className="sub-title">{`${resWeather?.name}, ${resWeather?.sys.country}`}</h2>
      </section>

      <section className="container-icon-especification">
        <figure className="icon-clima">
          <img
            src={`http://openweathermap.org/img/wn/${resWeather?.weather[0].icon}@2x.png`}
            alt="icon-clima"
            className="img-icon"
          />
          <div className="clima-text-temp">
            <p>{celcius ? `${temC} °C` : `${temF} °F`}</p>
          </div>
        </figure>

        <div className="weather-clima-container">
          <ul className="clima-especfication">
            <h3>{`"${resWeather?.weather[0].description}"`}</h3>
            <li className="especfication-item">
              <b className="item-b-title">
                <i className="bx bx-wind"></i>
                wind speed
              </b>
              {(resWeather?.wind.speed / 3.6).toFixed(2)} <b>km/h</b>
            </li>
            <li className="especfication-item">
              <b className="item-b-title">
                <i className="bx bxs-cloud"></i>
                Clouds
              </b>
              {resWeather?.clouds.all} <b>%</b>
            </li>
            <li className="especfication-item">
              <b className="item-b-title">
                <i className="bx bxs-thermometer"></i>
                Pressure
              </b>
              {resWeather?.main.pressure} <b>hPa</b>
            </li>
            <li className="especfication-item">
              <b className="item-b-title">
                <i className="bx bx-droplet"></i>
                Humidity
              </b>
              {resWeather?.main.humidity} <b>%</b>
            </li>
          </ul>
        </div>
      </section>
      <button onClick={() => setCelcius(!celcius)} className="card-weather-btn">
        {celcius ? "Change to fahrenheit" : "Change to celsius"}
      </button>
    </article>
  );
};
export default CardClima;

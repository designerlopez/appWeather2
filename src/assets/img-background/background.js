import dayClear from "./day-clear.jpg";
import dayStorm from "./day-storm.jpg";
import dayClouds from "./day-clouds.jpg";
import dayScatteredClouds from "./scattered-clouds.jpg";
import dayRain from "./day-rain.jpg";
import daySnow from "./day-snow.jpg";
import dayMist from "./day-mist.jpg";

import clearNight from "./night-clear.jpg";
import cloudsNight from "./night-clouds.jpg";
import scatteredNight from "./scattered-night.jpg";
import rainNight from "./night-rain.jpg";
import stormNight from "./night-storm.jpg";
import snowNight from "./night-snow.jpg";
import mistNight from "./night-mist.jpg";

import getApiWeather from "../../components/utils/getApiWeather";
import { useState } from "react";

const background = () => {

  const {resWeather} = getApiWeather(); //? respuesta de la API

  const [isDayorNight, setIsDayorNight] = useState();

  let dt = resWeather?.dt; //? hora de calculos de datos -> unix, UTC
  let sunrise = resWeather?.sys.sunrise; //? hora salida del sol -> unix, UTC
  let sunset = resWeather?.sys.sunset; //? hora del atardecer -> unix, UTC
  let id = resWeather?.weather[0].id; //? ID del icon

  if (dt >= sunset && dt < sunrise) {
    setIsDayorNight(false)
  } else if(dt >= sunrise && dt < sunset){
    setIsDayorNight(true)
  }

  let results = {}; //? aca guardo las imagenes

  if (isDayorNight) {
    if (id === 800) {
      results.image = dayClear;
    } else if (id === 801) {
      results.image = dayClouds;
    } else if (id === 802) {
      results.image = dayScatteredClouds;
    } else if (id >= 500 && id <= 504) {
      results.image = dayRain;
    } else if (id >= 200 && id < 300) {
      results.image = dayStorm;
    } else if (id >= 600 && id <= 622) {
      results.image = daySnow;
    } else if (id >= 701 && id <= 781) {
      results.image = dayMist;
    }
  } else {
    if (id === 800) {
      results.image = clearNight;
    } else if (id === 801) {
      results.image = cloudsNight;
    } else if (id === 802) {
      results.image = scatteredNight;
    } else if (id >= 500 && id <= 504) {
      results.image = rainNight;
    } else if (id >= 200 && id < 300) {
      results.image = stormNight;
    } else if (id >= 600 && id <= 622) {
      results.image = snowNight;
    } else if (id >= 701 && id <= 781) {
      results.image = mistNight;
    }
  }

  return {results};
};

export default background;

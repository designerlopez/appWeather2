import axios from "axios";
import { useEffect, useState } from "react";
import getLatLong from "./getLatLong";

const getApiWeather = () => {
  
  const [resWeather, setResWeather] = useState();

  const [isLoading, setIsLoading] = useState(true)

  const cord = getLatLong();

  useEffect(() => {
    if (cord?.lat !== undefined) {
      setIsLoading(true)
      const API_KEY = "562075115146cb4cc529a92d2261a483";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${cord.lat}&lon=${cord.lon}&appid=${API_KEY}`;
      axios
        .get(URL)
        .then((res) => setResWeather(res.data))
        .catch((err) => console.log(err));
    }
  }, [cord]);

  return {resWeather, isLoading, setIsLoading};
};

export default getApiWeather;

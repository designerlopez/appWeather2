import { useEffect, useState } from "react";

const getLatLong = () => {

  const [cord, setCord] = useState({});

  useEffect(() => {
    const succes = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setCord({ lat, lon });
    };

    navigator.geolocation.getCurrentPosition(succes);
  }, []);

  return cord;
};



export default getLatLong;

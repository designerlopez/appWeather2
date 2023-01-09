import "./App.css";
import CardClima from "./components/card/CardClima";
import background from "./assets/img-background/background";
import getApiWeather from "./components/utils/getApiWeather";
import { useEffect } from "react";
import Spiner from "./components/loading/Spiner";

function App() {
  const { resWeather, isLoading, setIsLoading } = getApiWeather();

  const { results } = background();
  let urlImg = results.image; //? url de la imagen

  useEffect(() => {
    if (resWeather) {
      setIsLoading(false);
    }
  }, [resWeather]);

  return (
    <div className="App" style={{ backgroundImage: `url(${urlImg})` }}>
      {isLoading ? <Spiner /> : <CardClima />}
    </div>
  );
}

export default App;

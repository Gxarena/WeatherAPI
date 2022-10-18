import React, {useEffect, useState} from 'react';
import { CiTrophy } from 'react-icons/ci';
import Home from './components/Home'
import TimeAndLocation from './components/TimeAndLocation'
import WeatherDetails from './components/WeatherDetails';
import getWeatherData from './service/WeatherService';

function App() {


  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () =>{
      const data = await getWeatherData(city, units)
      setWeather(data);
      console.log(data);
    }
    fetchWeather();
  }, [units, city]);

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadowl-xl shadow-gray-400'>
      <Home weather={weather} units={units} setUnits={setUnits} city={city} setCity={setCity}/>  

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <WeatherDetails weather={weather} units={units}/>
        </div>
      )}
    </div>
  );
}

export default App;

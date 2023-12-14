import React, {useEffect, useState} from 'react';
import Home from './components/Home'
import TimeAndLocation from './components/TimeAndLocation'
import WeatherDetails from './components/WeatherDetails';
import getWeatherData from './service/WeatherService';

function App() {

  const [units, setUnits] = useState('metric');
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

  const changeBG = () => {
    if (!weather) return "from-cyan-700 to-blue-700"
    const tempChange = units === 'metric' ? 20 : 60
    if (weather.temp < tempChange) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }

  return (
      <div className={`h-screen w-screen py-5 px-32 shadowl-xl bg-gradient-to-br ${changeBG()} shadow-gray-400`}>
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

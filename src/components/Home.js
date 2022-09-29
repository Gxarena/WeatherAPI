import React, {useState} from 'react'
import Axios from 'axios';

const Home = () => {

    const [location, setLocation] = useState("");

    const [temp, setTemp] = useState("");
    const [tempHigh, setTempHigh] = useState("");
    const [tempLow, setTempLow] = useState("");
    const [humidity, setHumidity] = useState("");
    const [weather, setWeather] = useState("");
    const [windSpeed, setWindSpeed] = useState("");

    const fetchCityData = (event) => {
        if(event.key === 'Enter'){
            Axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=6ddfb5dcea4cdfd2ec3dd89e4ba3550b`)
            .then((res) =>{
                console.log(res);

                const long = res.data[0].lon;
                const lat = res.data[0].lat;

                // Once the first API request is fulfilled to get the long and lat of the city, 
                // the next API request with the long and lat will fulfill, granting us the city weather data
                Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6ddfb5dcea4cdfd2ec3dd89e4ba3550b`)
                .then((res) => {
                    console.log(res)



                }).catch((err) => {
                    console.log(err)
                })

            }).catch((err) => {
                console.log(err)
            });
        }
    }

  return (
    <div>
        {/*  */}
        <div className=''>
        <input onKeyPress={fetchCityData} onChange={(event) => {setLocation(event.target.value);}} className="bg-gray-300/50 border border-gray-300 text-gray-900 text-sm rounded-lg w-50 p-2.5 placeholder-gray-500" placeholder="Enter City" required />
        
        </div>
        
    </div>
  )
}

export default Home
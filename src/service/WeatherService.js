const APIKEY = '6ddfb5dcea4cdfd2ec3dd89e4ba3550b';

const makeiconURL = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const formatTime = (dt) => new Date(dt * 1000);
export const formatSunset = (sunset) => new Date(sunset * 1000);
export const formatSunrise = (sunrise) => new Date(sunrise * 1000);

const getWeatherData = async (city, units ='metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`
    
    const data = await fetch(url)
    .then((res) => res.json())
    .then((data) =>data);

    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        timezone,
        wind: {speed},
        sys: {country, sunrise, sunset},
        weather
    } = data
   
    const {main: details, icon} = weather[0]
    
    return {lat, lon, temp ,feels_like, temp_min, temp_max, humidity, name, time: formatTime(dt), timezone, speed,
            country, sunup: formatSunrise(sunrise), sundown: formatSunset(sunset), weather, details, iconURL: makeiconURL(icon)}
};

export default getWeatherData;
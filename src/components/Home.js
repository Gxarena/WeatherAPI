import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import { BsSearch } from 'react-icons/bs'
import ClearSky from '../assets/clearsky.jpg';
import Cloudy from '../assets/cloudy.jpg';
import Rainy from '../assets/rainy.jpg';
import Snowy from '../assets/snowy.jpg';
import Storm from '../assets/storm.jpg';
import DefaultIMG from '../assets/defaultIMG.jpg';
import WeatherDetails from './WeatherDetails';

const Home = ({setUnits, units, setCity}) => {


  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle)
    if(toggle === true) {
      setUnits('imperial')
    } else {
      setUnits('metric'); 
    }
  }

  const handleTempUnit = (e) => {
    const selectedUnit = e.currentTarget.name;

    console.log(selectedUnit)
    
    if(units !== selectedUnit) setUnits(selectedUnit);
  }
  const enterKeyPressed = (e) => {
    if(e.keyCode === 13)
      setCity(e.currentTarget.value);
    
  }
  return (
    <div>
        {/*  */}
        <div className='flex flex-row justify-center my-6'>
          <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
              value={null}
              onKeyDown={enterKeyPressed}
              className="bg-gray-300/50 border border-gray text-gray-900 text-sm rounded-lg w-3/4 p-2.5 placeholder-black" 
              placeholder="Enter City" required 
              />
          </div>
          {/* 
          <div className='flex flex-row w-1/4 items-center justify-center'>
            <button onClick={(e) => handleTempUnit(e)} name='metric' className={`text-xl text-white font-light ${(btnState === true) ? 'bg-black' : ''}`}>°C</button> 
            <p className='text-xl text-white mx-2'>|</p>
            <button onClick={(e) => handleTempUnit(e)} name='imperial' className={`text-xl text-white font-light  ${(btnState === true) ? 'bg-black' : ''}`}>°F</button> 
          </div>  
          */}
          
          <div className='flex flex-row w-1/3 items-center justify-center'>
            <label htmlFor="default-toggle" class="inline-flex relative items-center cursor-pointer">
              <input onClick={handleToggle} type="checkbox" value="" id="default-toggle" class="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">°C | °F</span>
            </label>
          </div>   
               
        </div>
        
    </div>
  )
}

export default Home

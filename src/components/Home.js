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

const Home = ({setUnits, units, city, setCity}) => {

  const handleTempUnit = (e) => {
    const selectedUnit = e.currentTarget.name;
    console.log(selectedUnit)
    //if(units !== selectedUnit) setUnits(selectedUnit);
  }
  const enterKeyPressed = (e) => {
    if(e.keyCode === 13)
      setCity(e.currentTarget.value);
    
  }
    // FIGURE OUT HOW TO CHANGE IMAGE BASED ON backroundIMG
  return (
    <div>
        {/*  */}
        <div className='flex flex-row justify-center my-6'>
          <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
              value={null}
              onKeyDown={enterKeyPressed}
              className="bg-gray-300/50 border border-gray text-gray-900 text-sm rounded-lg w-full p-2.5 placeholder-black" 
              placeholder="Enter City" required 
              />
          </div>
          <div className='flex flex-row w-1/4 items-center justify-center'>
            <button onClick={(e) => handleTempUnit(e)} name='metric' className='text-xl text-white font-light'>°C</button> 
            <p className='text-xl text-white mx-2'>|</p>
            <button onClick={(e) => handleTempUnit(e)} name='imperial' className='text-xl text-white font-light'>°F</button> 
          </div>           
        </div>
        
    </div>
  )
}

export default Home

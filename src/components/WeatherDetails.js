import React from 'react'
import { CiTempHigh} from 'react-icons/ci'
import {  WiRaindrop } from 'react-icons/wi'
import { BsWind, BsSunrise, BsSunset } from 'react-icons/bs'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'
import Cloudy from '../assets/cloudy.jpg'


function WeatherDetails({weather: {humidity, details, temp, feels_like, speed, iconURL, 
                                    sunup, sundown, temp_max, temp_min}, units}) {
  return (
    <div>
        <div className='flex items-center justify-center py-10 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src={iconURL} className='w-20'/>
            <p className='text-5xl'>{temp.toFixed()} °{units === 'metric' ? 'C' : 'F'}</p>

            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <CiTempHigh size={20} className='mr-1' />
                    <span>Feels Like: {feels_like} °{units === 'metric' ? 'C' : 'F'}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <WiRaindrop size={20} className='mr-1'/>
                    <span>Humidity: {humidity}%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <BsWind size={20} className='mr-1'/>
                    <span>Wind: {speed} {units === 'metric' ? 'km/h' : 'mph'}</span>
                </div>

            </div>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <div className='flex flex-row items-center justify-between'>
                <BsSunrise size={20} className='mr-1'/>
                <p>Rise: {sunup.toLocaleTimeString()}</p>
            </div>
            <p>|</p>
            <div className='flex flex-row items-center justify-between'>
                <BsSunset size={20} className='mr-1'/>
                <p>Set: {sundown.toLocaleTimeString()}</p>
            </div>
            <p>|</p>
            <div className='flex flex-row items-center justify-between'>
                <FaTemperatureHigh size={20} className='mr-1'/>
                <p>{temp_max} °{units === 'metric' ? 'C' : 'F'}</p>
            </div>
            <p>|</p>
            <div className='flex flex-row items-center justify-between'>
                <FaTemperatureLow size={20} className='mr-1'/>
                <p>{temp_min} °{units === 'metric' ? 'C' : 'F'}</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails
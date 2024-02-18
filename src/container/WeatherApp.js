import React,{useState} from 'react';
import Location from '../components/location';
import WeatherDetails from '../components/WeatherDetails';
import WeatherFetch from '../components/WeatherFetch';
import './WeatherApp.css';
import WeatherLogo from "../assets/WeatherLogo.png";

const WeatherApp = () =>{
    const [location,setLocation] = useState("");
    const [weatherData,setWeatherData] = useState(null);

    const handleUserLocation = (loc) =>{
        setLocation(loc);
    }

    const handleWeatherData = (data) =>{
        setWeatherData(data);
    }
    return(
        <div>
            <div style={{display : 'flex' , flexDirection : 'column', alignItems: 'center', marginTop : '20px'}}>
                <img 
                    style={{}} 
                    src={WeatherLogo} 
                    alt="Weather Logo"
                />
            </div>
            <Location UserLocation = {handleUserLocation}/>
            <WeatherFetch UserLocation = {location}  onWeatherData = {handleWeatherData}/>
            <WeatherDetails WeatherData = {weatherData} />
        </div>
    )
}

export default WeatherApp;
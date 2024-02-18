import React,{useEffect} from "react";
import axios from "axios";

const WeatherFetch = ({UserLocation,onWeatherData}) =>{
    useEffect(() => {
        const weatherApiBaseUrl = 'https://api.weatherapi.com/v1';
        const weatherApiKey = '5ef17bf8510f4e68b2f103433230208';

        const apiURL = `${weatherApiBaseUrl}/current.json?key=${weatherApiKey}&q=${UserLocation}`;

        axios
            .get(apiURL)
            .then((res) => {
                const Data=res.data;
                onWeatherData(Data);
            })
            .catch((err) => {
                console.error('Error Fetching Weather Data',err);
            })
    },[UserLocation,onWeatherData]);

    return(null);
}

export default WeatherFetch;
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default  function WeatherApp(){
    let [weatherInfo, setWeatherInfo]=  useState({
        City: "moradabad",
        feels: 24.45,
        temp: 35.34,
        tempmin: 25.5,
        tempmax: 25.00,
        humidity: 47,  
        weather: "haze",
      });
      let updateInfo =(result)=>{
        setWeatherInfo(result);
      }
    return(
        <div style = { {textAlign: 'center'} }>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
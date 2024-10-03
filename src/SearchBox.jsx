
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city , setCity]= useState("");
    let [error , setError]= useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b44d36551cb52637e4c04f474ff3d2ff";

    let getWeather = async()=>{
        try{let Response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let responseJosn = await Response.json();
        // console.log(responseJosn)
        let result ={
            City: city,
            country: responseJosn.sys.country,
            feels: responseJosn.main.feels_like,
            temp: responseJosn.main.temp,
            tempmin: responseJosn.main.temp_min,
            tempmax: responseJosn.main.temp_max,
            humidity: responseJosn.main.humidity,
            weather : responseJosn.weather[0].description,
        }
        console.log(result)
        return result
    }catch(err){
        throw err;
    }
        
    }

     let CityhandleChange = (event)=>{
        setCity(event.target.value);
     }
  
     const handleSubmit = async (event) => {
        try{  event.preventDefault();
            console.log(city);
            setCity(""); // Reset city to an empty string
            
            let newInfo = await getWeather(); // Wait for the getWeather() function to resolve
            updateInfo(newInfo); // Update the info with the new data
            }catch(err){
                setError(true)
            }
      
    };
    
    return(
        <div className='Search'>
        <form action="" onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required  onChange={CityhandleChange}/>
        <br /> <br />
        <Button variant="contained" type='submit' >
        Send
      </Button>
      {error && <p style={{color: "red"}}>No such place exits!</p> }
      </form>
        </div>
    )
}
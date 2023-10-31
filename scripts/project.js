

const hourly = document.getElementById('hourly');
const timezone = document.getElementById('time');
const weatherList = document.getElementById('weatherList');
const temperature_2m = document.getElementById('temperature_2m');

const link = document.getElementById('weatherList');


export const BASE_API_URL ='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"';

 

const getWeather = async() =>{
     const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
        const weatherList = await response.json();
       console.log (weatherList);
       console.log (weatherList.hourly.time);  
       console.log(weatherList.hourly.temperature_2m);
       
 }; 
   

  



 getWeather();   




const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentweatherItemsEl = document.getElementById
('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherforecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const API_KEY ='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'

setInterval(() =>{
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hourIn2HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes(); 
    const ampm = hour >=12 ? 'PM' :'AM'

    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes+ ' ' +'<span id= "am-pm">'

    dateEl.innerHTML = days[day] + ' ,' + date+ ' ' + months[month]     

},1000);  

function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success)=> {

        let { latitude , longitude} = success.coords;

        fetch('https://api.open-meteo.com/v1/forecast?${latitude}=52.52&longitude=13.41&hourly=temperature_2m'(API_KEY).then(res =>res.json()).then(data =>)
   
         console.log(data)
         showWeatherData(data);
        })         

    })

} 
function 
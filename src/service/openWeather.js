import {OPEN_WEATHER_API_KEY} from "./Config"


export function getWeather(location){
  let url ="https://pro.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric" + "&APPID=" + OPEN_WEATHER_API_KEY
  return new Promise( (resolve, reject) =>{
    fetch(url)
      .then( (response) => response.json())
      .then( (data) => {
        return resolve(data);
      })
  })
}

export function getWeatherCoordinates(lon, lat){
  let url ="https://pro.openweathermap.org/data/2.5/weather?lon=" + lon + "&lat=" + lat + "&units=metric" + "&APPID=" + OPEN_WEATHER_API_KEY
  return new Promise( (resolve, reject) =>{
    fetch(url)
      .then( (response) => response.json())
      .then( (data) => {
        return resolve(data);
      })
  })
}

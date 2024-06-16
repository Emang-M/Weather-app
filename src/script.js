function currentWeather (response) {
   let temperatureElement= document.queruSelector("#temperature");
  let temperature=response.data.temperature.current;
  let cityElement= document.querySelector("#city");
  let descriptionElement=document.querySelector("#description");
  let humidityElement=document.querySelector("#humidity");
  let windSpeedElement=document.querySelector("#wind-speed");
  let timeElement=document.querySelector ("#time");
  let date= newDate (response.data.time*1000);
  let iconElement= document.querySelector("#icon");

  cityElement.innerHTML= response.data.city;
  timeElement.innerHTML= currentDate(date);
  descriptionElement.innerHTML= response.data.condition.description;
  humidityElement.innerHTML= '${response.data.humidity}%';
  windSpeedElement.innerHTML='${response.data.wind.speed}km/h';
  temperatureElement.innerHTML=Math.round(temperature);
  iconElement.innerHTML='<img src="${response.data.condition.icon_url}" class="weather-app-icon" />';
}

function currentDate (date) {
  let minutes= date.getMinutes ();
  let hours= date.getHours();
  let days= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
  let day= days[date.getDay()];
  
  if (minutes < 10) {
    minutes= '0${minutes}';
  }

  return '${day} {$hours}:${minutes}';
}

function searchCity(city){
  let apiKey=
    let apiUrl=
    axios.get(apiUrl).then(currentWeather);
}

function searchSubmit (event) {
  event.preventDefault ();
  let searchInput= document.querySelector("#search-form-input");

  searchCity (searchInput.value);
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Kasane");



function currentWeather(response) {
  console.log(response);
  let temperatureElement= document.querySelector("#temperature");
  let temperature=response.data.temperature.current;
    temperatureElement.innerHTML=Math.round(temperature);

  let cityElement= document.querySelector("#city");
    cityElement.innerHTML= response.data.city;

     let descriptionElement=document.querySelector("#description");
    descriptionElement.innerHTML= response.data.condition.description;

  let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML= '${response.data.temperature.humidity}%';

  let windSpeedElement=document.querySelector("#wind-speed");
    windSpeedElement.innerHTML='${response.data.wind.speed}km/h';

  let timeElement=document.querySelector("#time");
  let timeStamp=response.data.time * 1000;
  let date= new Date(timeStamp);
    timeElement.innerHTML= currentDate(date);

   let iconElement= document.querySelector("#icon");
iconElement.innerHTML='<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>';
}

function currentDate(date) {
  let minutes= date.getMinutes();
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

  if (hours < 10) {
    hours= '0${hours}';

  return '${day} {$hours}:${minutes}';
}


function searchSubmit(event) {
  event.preventDefault();
  let searchInput= document.querySelector("#search-form-input");
  let searchCity= searchInput.value;
  let apiKey="b2a5adcct04b33178913oc335f405433";
    let apiUrl='https://api.shecodes.io/weather/v1/current?query=${searchCity}&key=${apiKey}&units=metric';
    axios.get(apiUrl).then(currentWeather);
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchSubmit("Kasane");



//define axios apiKey apiUrl

let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
let today = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = days[today.getDay()];
let day = document.querySelector(".sat");
let hour = today.getHours();
let minute = today.getMinutes();
day.innerHTML = `${dayName} ${hour}:${minute}`;
//showtempfunc
function showTemp(response) {
  console.log(response.data);
  let temperatureElement = Math.round(response.data.main.temp);
  let cityNames = response.data.name;
  console.log(response.data.main.temp);
  let writtenCity = document.querySelector(".Tabriz");
  writtenCity.innerHTML = `${cityNames}`;
  let tempCity = document.querySelector("#celdegree");
  tempCity.innerHTML = `${temperatureElement}`;
}
//givecitynamefunc
function giveCityName(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
  console.log(apiUrl);
  console.log(inputCity.value);
}
function newLoc(event) {
  console.log("hello");
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showTempUsingLocation(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let cityNames = response.data.name;
  let writtenCity = document.querySelector(".Tabriz");
  writtenCity.innerHTML = `${cityNames}`;
  let tempCity = document.querySelector("#celdegree");
  tempCity.innerHTML = `${temperature}`;
}
function showPosition(position) {
  let positionlat = position.coords.latitude;
  let positionlong = position.coords.longitude;
  console.log(positionlat);
  let apiUrlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${positionlat}&lon=${positionlong}&units=metric&appid=${apiKey}`;
  console.log(apiUrlLocation);
  axios.get(apiUrlLocation).then(showTempUsingLocation);
}
let cityName = document.querySelector("#formm");
cityName.addEventListener("submit", giveCityName);
let currentLoc = document.querySelector("#buttonCurrent");
currentLoc.addEventListener("click", newLoc);

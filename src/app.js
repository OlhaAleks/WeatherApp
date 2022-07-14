let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octhtober",
    "November",
    "December"
  ];
  let currentDay = days[date.getDay()];
  let currentDate = date.getDate();
  let currentMonth = months[date.getMonth()];
  let currentHours = date.getHours();
  if (currentHours < 10) {
    currentHours = `0${hours}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${minutes}`;
  }
  let formattedDate = `${currentDay}, ${currentDate} ${currentMonth} ${currentHours}:${currentMinutes}`;
  return formattedDate;
}
   let newData = document.querySelector("#curdata");
    function currentHeaderh4() {
      newData.innerHTML = (formatDate(currentTime));
    }
    currentHeaderh4();

 function showTemperature(response) {
      let temperatureHeader = document.querySelector("#temperature-cur");
      let temperature = Math.round(response.data.main.temp);
      temperatureHeader.innerHTML = `${temperature}`;
}

function showHumidity(response) {
  let humidityHeader = document.querySelector("#humidity-cur");
  let humidity = Math.round(response.data.main.humidity);
  humidityHeader.innerHTML = `Humidity: ${humidity}%`;
}

let cityElement = document.querySelector("#city");
let apiKey = "5d30b474d4ae284fe49b962e45b136f7";

function showCity(event) {
      event.preventDefault();
      let cityInput = document.querySelector("#city-input");
      cityElement.innerHTML = cityInput.value;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
      axios.get(`${url}&app=id${apiKey}`).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity); 

function showcurrentCity(response) {
  let currentheaderCity = document.querySelector("#city");
  let currentCity = response.data.name;
  currentheaderCity.innerHTML = `${currentCity}`;
}

function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showcurrentCity);
}

function getCurcity(event) {
event.preventDefault();
navigator.geolocation.getCurrentPosition(retrievePosition);
}

let button = document.querySelector("#city-current");
button.addEventListener("click", getCurcity);
let URLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5318313&units=imperial&APPID=bf627dd42edb954b2c151102940b1674";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", URLstring, true);
weatherRequest.responseType = "text";
weatherRequest.send();

let agURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=2306104&units=imperial&APPID=bf627dd42edb954b2c151102940b1674";
let agweatherRequest = new XMLHttpRequest();
agweatherRequest.open("GET", agURLstring, true);
agweatherRequest.responseType = "text";
agweatherRequest.send();

let ogURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5779206&units=imperial&APPID=bf627dd42edb954b2c151102940b1674";
let ogweatherRequest = new XMLHttpRequest();
ogweatherRequest.open("GET", ogURLstring, true);
ogweatherRequest.responseType = "text";
ogweatherRequest.send();

let pccURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=bf627dd42edb954b2c151102940b1674";
let pccweatherRequest = new XMLHttpRequest();
pccweatherRequest.open("GET", pccURLstring, true);
pccweatherRequest.responseType = "text";
pccweatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  document.getElementById("tuccurrently").innerHTML =
    weatherData.weather[0].description;
  document.getElementById("tuchightemp").innerHTML =
    Math.round(weatherData.main.temp_max) + "&#176;F";
  document.getElementById("tuchumidity").innerHTML =
    weatherData.main.humidity + "%";
  document.getElementById("tucwindspeed").innerHTML =
    weatherData.wind.speed + " MPH";
};

agweatherRequest.onload = function() {
  let agweatherData = JSON.parse(agweatherRequest.responseText);
  document.getElementById("agcurrently").innerHTML =
    agweatherData.weather[0].description;
  document.getElementById("aghightemp").innerHTML =
    Math.round(agweatherData.main.temp_max) + "&#176;F";
  document.getElementById("aghumidity").innerHTML =
    agweatherData.main.humidity + "%";
  document.getElementById("agwindspeed").innerHTML =
    agweatherData.wind.speed + " MPH";
};

ogweatherRequest.onload = function() {
  let ogweatherData = JSON.parse(ogweatherRequest.responseText);
  document.getElementById("ogcurrently").innerHTML =
    ogweatherData.weather[0].description;
  document.getElementById("oghightemp").innerHTML =
    Math.round(ogweatherData.main.temp_max) + "&#176;F";
  document.getElementById("oghumidity").innerHTML =
    ogweatherData.main.humidity + "%";
  document.getElementById("ogwindspeed").innerHTML =
    ogweatherData.wind.speed + " MPH";
};

pccweatherRequest.onload = function() {
  let pccweatherData = JSON.parse(pccweatherRequest.responseText);
  document.getElementById("pcccurrently").innerHTML =
    pccweatherData.weather[0].description;
  document.getElementById("pcchightemp").innerHTML =
    Math.round(pccweatherData.main.temp_max) + "&#176;F";
  document.getElementById("pcchumidity").innerHTML =
    pccweatherData.main.humidity + "%";
  document.getElementById("pccwindspeed").innerHTML =
    pccweatherData.wind.speed + " MPH";
};

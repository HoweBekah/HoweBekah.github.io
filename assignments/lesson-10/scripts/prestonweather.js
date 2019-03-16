var weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bf627dd42edb954b2c151102940b1674';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

var forcastRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf627dd42edb954b2c151102940b1674';
forcastRequest.open('GET', apiURL, true);
forcastRequest.responseType = 'text';
forcastRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("currently").innerHTML = weatherData.weather[0].description;
    document.getElementById("hightemp").innerHTML = weatherData.main.temp_max + "&#176;";
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed + " MPH";

}

forcastRequest.onload = function () {
    var forcastData = JSON.parse(forcastRequest.responseText);
    console.log(forcastData);
}
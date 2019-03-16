var weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bf627dd42edb954b2c151102940b1674';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    var tempF = weatherData.main.temp_max;
    var speed = weatherData.wind.speed;

    var windchill = (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * tempF * Math.pow(speed, 0.16)
    );
    document.getElementById("windchill").innerHTML = Math.round(windchill * 10) / 10;
}
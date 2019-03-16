var request = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bf627dd42edb954b2c151102940b1674';
request.open('GET', apiURLstring, true);
request.responseType = 'text';
request.send();

request.onload = function () {
    var weatherD = JSON.parse(request.responseText);
    var tempF = weatherD.main.temp_max;
    var speed = weatherD.wind.speed;

    var windchill = (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * tempF * Math.pow(speed, 0.16)
    );
    document.getElementById("windchill").innerHTML = Math.round(windchill * 10) / 10;
}
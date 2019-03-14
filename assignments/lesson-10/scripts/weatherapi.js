var weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bf627dd42edb954b2c151102940b1674';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}
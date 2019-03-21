let URLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=bf627dd42edb954b2c151102940b1674';
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', URLstring, true);
weatherRequest.responseType = 'text';
weatherRequest.send();

let forcastRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=bf627dd42edb954b2c151102940b1674';
forcastRequest.open('GET', apiURL, true);
forcastRequest.responseType = 'text';
forcastRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("currently").innerHTML = weatherData.weather[0].description;
    document.getElementById("hightemp").innerHTML = Math.round(weatherData.main.temp_max) + "&#176;F";
    document.getElementById("humidity").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed + " MPH";
}

forcastRequest.onload = function () {
    let forcastData = JSON.parse(forcastRequest.responseText);
    for (var i = 0; i <= 40; i++) {
        var list = forcastData.list[i];
        var ulList = document.getElementById('daytemp');
        var checkList = list.dt_txt;

        if (checkList.includes('18:00:00')) {
            var listItem = document.createElement('li');
            var articleL = document.createElement('article');
            var icon = document.createElement("img");
            articleL.textContent = Math.round(list.main.temp) + "\u00B0" + "F";
            icon.src = "https://openweathermap.org/img/w/" + list.weather[0].icon + ".png";
            icon.alt = list.weather[0].description;
            articleL.appendChild(icon);
            listItem.appendChild(articleL);
            ulList.appendChild(listItem);
        }

    }
}
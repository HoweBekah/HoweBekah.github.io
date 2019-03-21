let eventRequest = new XMLHttpRequest();
let eventURLstring = "https://byui-cit230.github.io/weather/data/towndata.json";
eventRequest.open('GET', eventURLstring, true);
eventRequest.send();

eventRequest.onload = function () {

    let eventInfo = JSON.parse(eventRequest.responseText);
    console.log(eventInfo);

    var eventid = document.getElementById('events');
    for (var i = 0; i < eventInfo.towns[5].events.length; i++) {
        var eventP = document.createElement('p');
        eventP.textContent = eventInfo.towns[5].events[i];
        eventid.appendChild(eventP);
    }
}
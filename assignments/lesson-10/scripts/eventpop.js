var eventid = document.getElementById('events');

var requestURL =
    "https://howebekah.github.io/assignments/lesson-9/json/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL, true);
request.responseType = "text";
request.send();

request.onload = function () {
    var townText = request.responseText;
    var towns = JSON.parse(townText);
    populateEvents(towns);
}

function populateEvents(jObj) {
    var townList = jObj["towns"];
    var listC = document.createElement('ul');
    console.log(townList[0].events);
    for (var index = 0; index < townList[0].events.length; index++) {
        var listItem = document.createElement('li');
        listItem.textContent = events[index];
        listC.appendChild(listItem);
    }
    eventid.appendChild(listC);
}
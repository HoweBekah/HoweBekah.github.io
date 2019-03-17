var eventid = document.getElementById('events');

var requestURL =
    "https://howebekah.github.io/assignments/lesson-9/json/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();

request.onload = function () {
    var townText = request.responseText;
    var towns = JSON.parse(townText);
    populateEvents(towns);
}

function populateEvents(jObj) {
    var townList = jObj["towns"];
    var articleL = document.createElement("article");
    var listC = document.createElement('ul');
    var events = townList[0].events;
    for (var j = 0; j < events.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = events[j];
        listC.appendChild(listItem);
    }
    articleL.appendChild(listC);
    eventid.appendChild(articleL);
}
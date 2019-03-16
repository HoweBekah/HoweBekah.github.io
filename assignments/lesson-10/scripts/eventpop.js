var section = document.querySelector("section");

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
    for (var i = 0; i < townList.length; i++) {

        switch (townList.name) {

            case 'Preston':
                var articleL = document.createElement("article");
                var listC = document.createElement('ul');
                var events = townList[0].events;
                console.log(events);
                for (var j = 0; j < events.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = events[j];
                    listC.appendChild(listItem);
                }
                articleL.appendChild(listC);
                section.appendChild(articleL);
                break;
            case 'Soda Springs':
                var articleL = document.createElement("article");
                var listC = document.createElement('ul');
                var events = townList[1].events;
                for (var j = 0; j < events.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = events[j];
                    listC.appendChild(listItem);
                }
                articleL.appendChild(listC);
                section.appendChild(articleL);
                break;
            case 'Fish Haven':
                var articleL = document.createElement("article");
                var listC = document.createElement('ul');
                var events = townList[2].events;
                for (var j = 0; j < events.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = events[j];
                    listC.appendChild(listItem);
                }
                articleL.appendChild(listC);
                section.appendChild(articleL);
                break;
        }
    }
}
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

/*function populateEvents(jObj) {
    var townList = jObj["towns"];
    var listC = document.createElement('ul');
    var events = townList[0].events;
    for (var j = 0; j < events.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = events[j];
        listC.appendChild(listItem);
    }
    eventid.appendChild(listC);
}*/
function populateEvents(jObj) {
    var townList = jObj['towns']; // Easy access to the towns item in the JSON.
    var listC = document.createElement('ul');
    // First find town == Preston at townIndex. Second loop through events at townList[townIndex].events. Third add the text to some DOM element.
    for (var townI = 0; townI < townList.length; townI++) { // Find town == aTownName by looping through all the towns until we find it.
        if (document.URL.indexOf("preston") > -1) { // If we find a matching town...
            for (var eventI = 0; eventI < townList[0].events.length; eventI++) { // Loop through all events for aTownName and show them on the DOM.
                var listItem = document.createElement('li');
                listItem.textContent = townList[0].events[eventI];
                listC.appendChild(listItem); // Append the P to a Div pre-created to display preston events.
            }
        } else if (townList[townI].name == 'Soda Springs') { // If we find a matching town... 
            for (var eventI = 0; eventI < townList[townI].events.length; eventI++) { // Loop through all events for aTownName and show them on the DOM.
                var listItem = document.createElement('li');
                listItem.textContent = townList[townI].events[eventI];
                listC.appendChild(listItem); // Append the P to a Div pre-created to display preston events.
            }
        } else { // If we find a matching town... 
            for (var eventI = 0; eventI < townList[townI].events.length; eventI++) { // Loop through all events for aTownName and show them on the DOM.
                var listItem = document.createElement('li');
                listItem.textContent = townList[townI].events[eventI];
                listC.appendChild(listItem); // Append the P to a Div pre-created to display preston events.
            }
        }
        eventid.appendChild(listC);
    }
}
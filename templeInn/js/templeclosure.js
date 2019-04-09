var tucclose = document.getElementById("tucclosuresched");
var tucclosewhole = document.getElementById("tucclosewhole");
var agclose = document.getElementById("agclosuresched");
var agclosewhole = document.getElementById("agclosewhole");
var ogclose = document.getElementById("ogclosuresched");
var ogclosewhole = document.getElementById("ogclosewhole");
var pcclose = document.getElementById("pcclosuresched");
var pcclosewhole = document.getElementById("pcclosewhole");

var requestURL = 'https://howebekah.github.io/templeInn/json/templeclosure.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    var closeText = request.response;
    var closure = JSON.parse(closeText);
    closure = closure["temples"];
    var h4 = document.createElement("h4");
    h4.textContent = "Closure Schedule";

    tucclosewhole.appendChild(h4);
    for (var i = 0; i < closure[0].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[0].closureSchedule[i];
        tucclose.appendChild(item);
    }
    tucclosewhole.appendChild(tucclose);

    var oh4 = document.createElement("h4");
    oh4.textContent = "Closure Schedule";
    ogclosewhole.appendChild(oh4);
    for (var i = 0; i < closure[1].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[1].closureSchedule[i];
        ogclose.appendChild(item);
    }
    ogclosewhole.appendChild(ogclose);

    var ah4 = document.createElement("h4");
    ah4.textContent = "Closure Schedule";
    agclosewhole.appendChild(ah4);
    for (var i = 0; i < closure[2].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[2].closureSchedule[i];
        agclose.appendChild(item);
    }
    agclosewhole.appendChild(agclose);

    var ph4 = document.createElement("h4");
    ph4.textContent = "Closure Schedule";
    pcclosewhole.appendChild(ph4);
    for (var i = 0; i < closure[3].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[3].closureSchedule[i];
        console.log(item);
        pcclose.appendChild(item);
    }
    pcclosewhole.appendChild(pcclose);
}
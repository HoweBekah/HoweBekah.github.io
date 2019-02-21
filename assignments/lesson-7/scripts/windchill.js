var tempF = parseInt(document.getElementById("currenttemp").innerHTML);
var speed = parseInt(document.getElementById("windspeed").innerHTML);

var windchill = (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * tempF * Math.pow(speed, 0.16)
);
document.getElementById("windchill").innerHTML = Math.round(windchill * 10) / 10;;
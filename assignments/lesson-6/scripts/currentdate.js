var year = now.getFullYear();
var monthnum = now.getMonth();
switch (monthnum) {
    case 0:
        var month = "January";
        break;
    case 1:
        var month = "February";
        break;
    case 2:
        var month = "March";
        break;
    case 3:
        var month = "April";
        break;
    case 4:
        var month = "May";
        break;
    case 5:
        var month = "June";
        break;
    case 6:
        var month = "July";
        break;
    case 7:
        var month = "August";
        break;
    case 8:
        var month = "September";
        break;
    case 9:
        var month = "October";
        break;
    case 10:
        var month = "November";
        break;
    case 11:
        var month = "December";
        break;
}
var datenum = now.getDate();
var daynum = now.getDay();
switch (daynum) {
    case 0:
        var day = "Sunday";
        break;
    case 1:
        var day = "Monday";
        break;
    case 2:
        var day = "Tuesday";
        break;
    case 3:
        var day = "Wednesday";
        break;
    case 4:
        var day = "Thursday";
        break;
    case 5:
        var day = "Friday";
        break;
    case 6:
        var day = "Saturday";
        break;
}
document.getElementById("currentdate").innerHTML = day + ", " + datenum + " " + month + " "
year;
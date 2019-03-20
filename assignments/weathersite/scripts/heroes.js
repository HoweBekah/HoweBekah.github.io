var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://howebekah.github.io/assignments/lesson-9/json/heroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    var heroText = request.response;
    var heroes = JSON.parse(heroText);
    populateHeader(heroes);
    showHeroes(heroes);
}

function populateHeader(jObj) {
    var h1C = document.createElement('h1');
    h1C.textContent = jObj['squadName'];
    header.appendChild(h1C);

    var paraC = document.createElement('p');
    paraC.textContent = 'Hometown: ' + jObj['homeTown'] + ' || Formed: ' + jObj['formed'];
    header.appendChild(paraC);

    var baseC = document.createElement('p');
    baseC.textContent = 'Secret Sanctum: ' + jObj['secretBase'];
    header.appendChild(baseC);

}

function showHeroes(jObj) {
    var heroes = jObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        var articleC = document.createElement('article');
        var h2C = document.createElement('h2');
        var para1C = document.createElement('p');
        var para2C = document.createElement('p');
        var para3C = document.createElement('p');
        var listC = document.createElement('ul');

        h2C.textContent = heroes[i].name;
        para1C.textContent = 'Secret Identity: ' + heroes[i].secretIdentity;
        para2C.textContent = 'Age: ' + heroes[i].age;
        para3C.textContent = 'Super Powers: ';

        var powers = heroes[i].powers;
        for (var j = 0; j < powers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = powers[j];
            listC.appendChild(listItem);
        }

        articleC.appendChild(h2C);
        articleC.appendChild(para1C);
        articleC.appendChild(para2C);
        articleC.appendChild(para3C);
        articleC.appendChild(listC);

        section.appendChild(articleC);
    }
}
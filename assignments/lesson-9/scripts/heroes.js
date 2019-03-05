var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://howebekah.github.io/CIT261/json/villain.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    var villainsText = request.response;
    var villain = JSON.parse(villainsText);
    populateHeader(villain);
    showHeroes(villain);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['teamName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'];
    header.appendChild(myPara);

    var myBase = document.createElement('p');
    myBase.textContent = 'Secret Sanctum: ' + jsonObj['secretBase'];
    header.appendChild(myBase);

}

function showHeroes(jsonObj) {
    var villains = jsonObj['members'];

    for (var i = 0; i < villains.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = villains[i].name;
        myPara1.textContent = 'Secret Identity: ' + villains[i].secretIdentity;
        myPara2.textContent = 'Age: ' + villains[i].age;
        myPara3.textContent = 'Evil Powers: ';

        var powers = villains[i].powers;
        for (var j = 0; j < powers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = powers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
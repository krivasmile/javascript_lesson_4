"use strict"
but1.onclick = () => validateAge() ? sendDataByGetMethod() : incorrectData(age);
but2.onclick = () => validateAge() ? sendDataByPostMethod() : incorrectData(age);

function validateAge() {
    return !((isNaN(age.value)) || ((age.value) > 100 || (age.value) < 1));
}

function incorrectData(elem) {
    elem.classList.add('error');
    elem.focus();
}
function correctData(elem) {
    elem.classList.remove('error');
    elem.classList.add('correct');
    elem.blur();
}

function sendDataByGetMethod() {
    correctData(age);
    var userData = {
        lName : document.getElementById('lName').value,
        fName : document.getElementById('fName').value,
        age : document.getElementById('age').value,
        address : document.getElementById('address').value
    };

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/formGet?lName= " + userData.lName
        + "&fName= "+ userData.fName
        + "&age= " + userData.age
        + "&address= " + userData.address);
    xhr.setRequestHeader("Content-type", "applcation/json");
    xhr.send();
}

function sendDataByPostMethod() {
    correctData(age);
    var userData = {
        lName : document.getElementById('lName').value,
        fName : document.getElementById('fName').value,
        age : document.getElementById('age').value,
        address : document.getElementById('address').value
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/formPost");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(userData));
}
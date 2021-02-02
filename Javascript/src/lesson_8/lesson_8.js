'use strict'

hideBut.onclick = function () {
    if(text.classList.contains('invisible')){
        text.classList.remove('invisible');
        this.value = 'Hide!';
    }
    else {
        text.classList.add('invisible');
        this.value = 'Show!';
    }
}

forHide.onclick = function () {
    this.classList.add('invisible');
}

let menuElem = document.getElementById('menu');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};
'use strict'

function inputDataText() {
    let elements = document.querySelectorAll('.part_1>ul>li');
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'love';
    }
    alert("We have " + elements.length + " li for love");
}

function selectLinks() {
    let elements = document.querySelectorAll('.part_2>ul>li>a');
    for (let i = 0; i < elements.length; i++) {
            let element = elements[i].innerHTML;
            if (element.includes("http://") || element.includes("ftp://")){
                elements[i].className = 'external-red';
            }
        }
}

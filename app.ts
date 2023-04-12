var container = document.querySelector('.container');
var colorCard = document.querySelector('.color-card') as HTMLElement;
var btn = document.querySelector("button");
var hex = document. querySelector("span");

function getNewColor() {
    var symbols = '0123456789ABCDEF';

    var color = '#';

    for(var i = 0; i<6; i++) {
        color= color + symbols[Math.floor(Math.random() * 16)];
    }
    
    colorCard!.style.backgroundColor = color;
}

btn!.addEventListener("click", getNewColor);
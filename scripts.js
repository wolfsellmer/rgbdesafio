window.addEventListener('load', start)


let redColor = null
let greenColor = null
let blueColor = null
let red = null
let green = null
let blue = null
let rgbResult = null
let rgbNew = null



function start(){
    red = document.querySelector('#r');
    green = document.querySelector('#g');
    blue = document.querySelector('#b');

    redValue = document.querySelector('#redValue');
    greenValue = document.querySelector('#greenValue');
    blueValue = document.querySelector('#blueValue');

    rgbResult = document.querySelector('#rgb');

    red.addEventListener('input', rgbColor);
    green.addEventListener('input',rgbColor);
    blue.addEventListener('input', rgbColor);
   

    rgbColor()
}

function rgbColor(){
    let cRed = parseInt(red.value, 10);
    let cGreen = parseInt(green.value, 10);
    let cBlue = parseInt(blue.value, 10);

    redValue.value = cRed;
    greenValue.value = cGreen;
    blueValue.value = cBlue;

    rgbNew = 'rgb('+ cRed + ',' + cGreen + ',' + cBlue + ')';

    rgbResult.style.backgroundColor = rgbNew
}
start();


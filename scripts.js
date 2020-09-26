//window.addEventListener('load', start)


const redColor = null
const greenColor = null
const blueColor = null
const red = null
const green = null
const blue = null
const rgbResult = null



function start(){
    red = document.querySelector('#r');
    green = document.querySelector('#g');
    blue = document.querySelector('#b');

    redColor = document.querySelector('#redValue');
    greenColor = document.querySelector('#greenValue');
    blueColor = document.querySelector('#blueValue');
    
    rgbResult = document.querySelector('#rgb');

    redColor.addEventListener('input', rgbColor);
    greenColor.addEventListener('input',rgbColor);
    blueColor.addEventListener('input', rgbColor);
    rgbColor()
}

function rgbColor(){
    const cRed = parseInt(redColor.value, 10);
    const cGreen = parseInt(greenColor.value, 10);
    const cBlue = parseInt(blueColor.value, 10);

    redColor.value = cRed;
    greenColor.value = cGreen;
    blueColor.value = cBlue;

    const rgbNew = 'rgb('+ cRed + ',' + cGreen + ',' + cBlue + ')';

    rgbResult.style.backgroundColor = rgbNew
}
start();



// const red = document.querySelector('#r')
// const green = document.querySelector('#g')
// const blue = document.querySelector('#b')
// const redColor = document.querySelector('#redValue')
// const greenColor = document.querySelector('#greenValue')
// const blueColor = document.querySelector('#blueValue')
// const rgbResult = document.querySelector('#rgb')


// red.oninput = ()=>{
//     redColor.value = parseInt(red.value)
//     rgbResult.value = 'rgb(' + parseInt(blueColor.value)+ ',' +parseInt(greenColor.value)+ ',' + parseInt(redColor.value)+')'
//     document.getElementById("rgb").style.backgroundColor = rgbResult.value
// }
// green.oninput = ()=>{
//     greenColor.value = parseInt(green.value)
//     rgbResult.value = 'rgb(' + parseInt(blueColor.value)+ ',' +parseInt(greenColor.value)+ ',' + parseInt(redColor.value)+')'
//     document.getElementById("rgb").style.backgroundColor = rgbResult.value
// }
// blue.oninput = ()=>{
//     blueColor.value = parseInt(blue.value)
//     rgbResult.value = 'rgb(' + parseInt(blueColor.value)+ ',' +parseInt(greenColor.value)+ ',' + parseInt(redColor.value)+')'
    
//     document.getElementById("rgb").style.backgroundColor = rgbResult.value

// }

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var canvas = $('canvas');
var ctx = canvas.getContext("2d");
const color = $('#color');
const eraser = $('#eraser');
const increase = $('#increase');
const decrease = $('#decrease');
const size = $('#size');
const save = $('#save');
const clear = $('#clear');
var drawColor = currentColor;
var erzcol = '#ffffff';
var currentColor = 'black';
let x, y;
let isPressed = false;
let lineWidth = 5;
let isErasible = false;

function drawPoint(x, y) {
    ctx.beginPath();
    ctx.fillStyle = drawColor;
    ctx.arc(x, y, lineWidth/2, 0, Math.PI * 2);
    ctx.fill();
}

function drawLine(x, y, xe, ye) {
    ctx.beginPath();
    ctx.strokeStyle = drawColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x, y);
    ctx.lineTo(xe, ye);
    ctx.stroke();
}

canvas.onmousedown = function (e) {
    x = e.offsetX;
    y = e.offsetY;
    isPressed = true;
}

canvas.onmouseup = function (e) {
        isPressed = false;
        x = undefined;
        y = undefined;
}

canvas.onmousemove = function (e) {
    if(isPressed){
        if(isErasible){
            drawColor = erzcol;
        }else {
            drawColor = currentColor;
        }
        let xe = e.offsetX;
        let ye = e.offsetY;
        drawPoint(xe,ye);
        drawLine(x, y, xe, ye);
        x = xe;
        y = ye;
    }
}

color.onchange = function (e) {
    currentColor = e.target.value;
}

decrease.onclick = () => {
    lineWidth <= 5 ? lineWidth = 5 : lineWidth-=5;
    size.textContent = lineWidth; 
};
increase.onclick = () => {
    lineWidth+=5;
    size.textContent = lineWidth; 
};

eraser.onclick = function(){
    isErasible = !isErasible;
    this.classList.toggle('active', isErasible);
}

clear.onclick = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

save.onclick = function(){
    var output = canvas.toDataURL('image/jpg').replace('image/png', 'image/octet-stream');
    // this.setAttribute('download', 'p.png');
    this.setAttribute('href', output);
    // this.click()
    console.log(output);
}
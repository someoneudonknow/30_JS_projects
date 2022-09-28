const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('.range').onmousemove = function(e){
    let processWidth = e.pageX - this.offsetLeft;
    let processWidthPercents = Math.round(processWidth  / this.offsetWidth  * 100);
    let opacity = processWidthPercents / 100;
    
    $('.process').style.width = processWidthPercents + '%';
    $('.process span').textContent = processWidthPercents + '%';
    $('body').style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
}

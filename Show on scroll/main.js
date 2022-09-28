const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const animationEl = $$('.show-on-scroll');

function checkInViewport(element) {
    let rect = element.getClientRects();
    let screenHeight = window.innerHeight;

    if(!(rect[0].bottom < 0 || rect[0].top > screenHeight)){
        element.classList.add('start');
    }else {
        element.classList.remove('start');
    }
};

function checkAnimation(){
    animationEl.forEach((el) => {
        checkInViewport(el);
    })
}

window.onscroll = checkAnimation;
   
    

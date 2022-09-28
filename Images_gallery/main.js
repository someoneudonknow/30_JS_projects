'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const images = $$('.image img');
const nextBtn = $('.next');
const prevBtn = $('.prev');
const closeBtn = $('.close');
const gallery = $('.gallery');
const galleryImg = $('.gallery__inner img');
var currentIndex = 0;

function toggleShow () {
    gallery.classList.toggle('show');
}

images.forEach((image, index) => {
    image.onclick = () => {
        currentIndex = index;
        galleryImg.src = images[currentIndex].src;
        toggleShow();
    }
});

nextBtn.onclick = () => {
    currentIndex+=1;
    if(currentIndex >= images.length) {
        currentIndex = 0;
    }

    galleryImg.src = images[currentIndex].src;
};

prevBtn.onclick = () => {
    currentIndex-=1;
    if(currentIndex < 0) {
        currentIndex = images.length-1;
    }

    galleryImg.src = images[currentIndex].src;
};

gallery.onclick = (e) => {
    if(e.target === e.currentTarget) {
        toggleShow();
    }
}
closeBtn.onclick = toggleShow;
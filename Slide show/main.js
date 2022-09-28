const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgFeature = $('.img-wrapper img');
const listImg = $('.list-images');
const galleryImg = $$('.list-images img');
const nextBtn = $('.next');
const prevBtn = $('.prev');
var currentImg = 0;


function changePic(){
    nextBtn.click();
    setImg();
}

setInterval(changePic, 6000);

var setImg = () => {
    imgFeature.src = galleryImg[currentImg].src;
    if($('.active')){
        $('.active').classList.remove('active');
    }
    galleryImg[currentImg].parentElement.setAttribute('class','active');
}

setImg();

nextBtn.onclick = () => {
    currentImg++;
    currentImg == galleryImg.length ? currentImg = 0: currentImg;
    imgFeature.style.animation = 'slide-out-left ease 1s forwards';
    
    setTimeout(function() {
        imgFeature.style.animation = 'slide-in-left ease 1s';
        setImg();
    },1000);
}

prevBtn.onclick = () => {
    currentImg--;
    currentImg < 0 ? currentImg = galleryImg.length - 1: currentImg;
    imgFeature.style.animation = 'slide-out-right ease .8s forwards';
    
    setTimeout(function() {
        imgFeature.style.animation = 'slide-in-right ease .8s';
        setImg();
    },800);
}

galleryImg.forEach((img,index) => {
    img.onclick = function(){
        currentImg = index;
        setImg();
    }
});


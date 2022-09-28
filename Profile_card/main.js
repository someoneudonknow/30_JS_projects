const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const viewProfileBtn = $('#card__button');
const card = $('.card');
const profileName = $('.card__title');

var isFullView = false;

viewProfileBtn.onclick = () => {
    isFullView = !isFullView;
    card.classList.toggle('card--full-view',isFullView);
    
    if(isFullView){
        profileName.textContent = 'Dương Trung Hiếu';
        viewProfileBtn.textContent = 'Hide profile'
    }else {
        profileName.textContent = 'Trung Hieu';
        viewProfileBtn.textContent = 'View profile'
    }
}
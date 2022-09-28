const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const result = $('.result');
const alert1 = $('.alert');
const box = $('.box');
const key = $('.key p:nth-child(2)');
const elocation = $('.location p:nth-child(2)');
const which = $('.which p:nth-child(2)');
const code = $('.code p:nth-child(2)');

function getKeyDetails(e) {
    result.textContent = e.which;
    
    let eKey = e.which === 32 ? 'Space' : e.key;
    key.innerText = eKey;

    which.textContent = e.which;
    code.textContent = e.code;
    elocation.textContent = e.location;
}

window.onkeydown = (e) => {
    e.preventDefault();

    getKeyDetails(e);
    alert1.classList.add('hide');
    box.classList.remove('hide');
};



const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const iconCLoseBtn = document.querySelector('.modal__header i');

function toggleModal() {
    modal.classList.toggle('hide');
}

document.querySelector('.modal__inner').onclick = function(e){
    e.stopPropagation();
}

openModalBtn.onclick =  toggleModal;
closeModalBtn.onclick = toggleModal;
iconCLoseBtn.onclick = toggleModal;
modal.onclick = toggleModal;

// function(e) {
//     if(e.target === e.currentTarget) {
//         toggleModal();
//     }
// };

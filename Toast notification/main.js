const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toasts = $('#toasts');
const successBtn  =$('.success-btn');
const warningBtn = $('.warning-btn');
const errorBtn = $('.error-btn');

var createToast = (type = 'success', message = 'This is a message !', time = 7) => {
    let toast = document.createElement('div');
    let icon;
    toast.setAttribute('class', `toast ${type}`);

    if(type === 'success') {
        icon = '<i class="fa-solid fa-circle-check"></i>'
    }else if(type === 'warning') {
        icon = '<i class="fa-solid fa-circle-exclamation"></i>';
    }else if(type === 'error') {
        icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    }

    toast.innerHTML = `
                        ${icon}
                        <span class="message">${message}</span>
                        <div class="countdown"></div>
                      `;
    toast.style.animation = `slide-in ease 1.5s forwards, slide-out ease-in 1s forwards ${time}s`;
    toast.querySelector('.countdown').style.animation = `countdown linear ${time}s forwards`;
    toasts.appendChild(toast); 

    setTimeout(() => toast.remove() , (time + 1) * 1000);
}

successBtn.onclick = () => createToast('success', 'Login success');
warningBtn.onclick = () => createToast('warning', 'Your account has been banned');
errorBtn.onclick = () => createToast('error', 'Login failed');
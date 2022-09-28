const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const HOST = 'https://fakestoreapi.com/products';
const productsList = $('.products');
const search = $('.search input');

productsList.classList.add('hide');

fetch(HOST)
    .then((response) => response.json())
    .then((mockData) => {
        mockData.forEach(item => {
            let product = document.createElement('div');
            product.setAttribute('class', 'product');
        
            product.innerHTML = `<img src="${item.image}" alt="">
                                 <div class="info">
                                     <div class="name">${item.title}</div>
                                     <div class="price">$${item.price}</div>
                                 </div>`;
            productsList.appendChild(product);
        });
        $('.products h3').classList.add('hide');
    })

search.oninput = function(){
    let textValue = this.value.trim();

    Array.from($$('.products .product')).forEach(item => {
        if(item.innerText.toLowerCase().includes(textValue.toLowerCase())){
            item.classList.remove('hide');
        }else {
            item.classList.add('hide');
        }
    })
}

productsList.onmousedown = e => e.preventDefault();

search.onfocus = function(){
    productsList.style.display = 'block';
}

search.onblur = function(){
    productsList.style.display = 'none';
}
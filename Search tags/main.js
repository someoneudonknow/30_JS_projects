'use strict';
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const content = $('.content');
const input = $('input');
const removeAllBtn = $('.btn-removeAll');

var tags = [];

renderTags();

function renderTags() {
    content.innerHTML = '';

    tags.forEach((tag, index) => {
        content.innerHTML += `<li index="${index}"> 
                                ${tag} 
                                <i class="delete fa-solid fa-xmark"></i>
                                </li>`;
    });
    content.appendChild(input);
    input.focus();
}

if(content){

    input.oninput = function() {
    
        document.onkeydown = (e) => {
            if(e.key === 'Enter') {
                tags.push(this.value.trim());
                renderTags();
                this.value = null;
            }
        }
    
    }

    removeAllBtn.onclick = () =>{
        if(tags.length > 0 && confirm('Are you sure you want to delete all tags?')) {
            tags.splice(0, tags.length);
            renderTags();
        }
    };

    content.onclick = function(e) {
        let delBtn = e.target.closest('li .delete');
        if(delBtn) {
            let index = delBtn.parentElement.getAttribute("index");
            tags.splice(index,1);
            renderTags();
        }
    }    
}

const $ = document.querySelector.bind(document);

const fileInput = $('#file-input');

fileInput.onchange = function (e) {

    var file = this.files[0];

    if(!file.type.startsWith('image')){
        console.error('invalid file');
        return;
    }

    var img = document.createElement('img');
    img.src = URL.createObjectURL(this.files[0]);
    
    $('.preview').appendChild(img);
};
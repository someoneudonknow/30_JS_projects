
$(document).ready(function() {
    function counterAnimate(listSelector,step){

        $.each(listSelector,function(i,val){
            let value = Number($(`${val}`).text());
            let runStep = Math.ceil(value / step);
            let count = 0;
            
            let counter = setInterval(() => {
                count += runStep;
                if(count >= value){
                    clearInterval(counter);
                    count = value;
                }
                $(`${val}`).text(`${count}`);
            },1);
            
       }) 
    }

    let listSelector = ['.counter .facebook', '.counter .tiktok', '.counter .youtube'];

    counterAnimate([...listSelector],200);     
});
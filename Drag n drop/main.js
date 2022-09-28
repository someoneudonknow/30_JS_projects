$(document).ready(function(){
    const boxes = $('.box');
    const target = $('.target');
    var currentTarget = null;

    boxes.each(function(index){
        target.each(function(index) {
            $(this).on('dragstart', function(){
                currentTarget = $(this);
                $(this).addClass('dragging');
            });

            $(this).on('dragend', function(){
                $(this).removeClass('dragging');
            });
        });

        $(this).on('dragover', function(e) {
            e.preventDefault();
        });

        $(this).on('drop',function() {
            if(!$(this).children('.target')[0]) {
                $(this)[0].append(currentTarget[0]);
            }
        });
    })

});
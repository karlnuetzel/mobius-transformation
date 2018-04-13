$(document).ready(function() {

    var height = $('.quadOne').height();
    var amount = height / 20;
    console.log(amount);
    console.log(height);
    for (i = 0; i < 200; i++){
        $('.quadOne').prepend("<div id='grid'></div>");
        $('.quadTwo').prepend("<div id='grid'></div>");
        $('.quadThree').prepend("<div id='grid'></div>");
        $('.quadFour').prepend("<div id='grid'></div>");
    }

    $('.square').animate({
       right: "-=500"
    }, 500, function(){

    });
});
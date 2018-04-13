$(document).ready(function() {

    var height = $('.quadOne').height();
    var amount = height / 20;
    console.log(amount);
    console.log(height);
    for (i = 0; i < 200; i++) {
        $('.quadOne').prepend("<div id='grid'></div>");
        $('.quadTwo').prepend("<div id='grid'></div>");
        $('.quadThree').prepend("<div id='grid'></div>");
        $('.quadFour').prepend("<div id='grid'></div>");
    }

    translations();

    function translations() {

        // translate
        function translateRight() {
            $('.square').animate({
                right: "-=500"
            }, 800, function () {});
        }

        function translateLeft() {
            $('.square').animate({
                left: "-=500"
            }, 800, function () {});
        }

        function translateCurve(x, y) {
            var direction = Math.atan2(x,  y) / Math.PI * 180
            var distance = Math.hypot(origin_x - x, origin_y - y);
            console.log('Direction: ' + direction);
            console.log('Distance: ' + distance);

            function calculate() {
                
            }

        }

        // Intro
        translateLeft();
        translateRight();
        translateRight();
        translateLeft();

        var x = 500;
        var y = 400;
        var origin_x = 0;
        var origin_y = 0;
        translateCurve(x, y);

    }

});
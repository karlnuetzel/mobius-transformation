$(document).ready(function() {

    init();
    function init() {
        var height = $('.quadOne').height();
        var amount = height / 20;
        console.log(amount);
        console.log(height);
        var x = 20;
        var y = 1;
        for (i = 0; i < 200; i++) {
            if (x === 0) {
                x = 20;
                y++;
            }
            var coords = "_" + x + "_" + y + "";
            $('.quadOne').prepend("<div id='grid' class='" + coords + "'></div>");
            x--;
            $('.quadTwo').prepend("<div id='grid'></div>");
            $('.quadThree').prepend("<div id='grid'></div>");
            $('.quadFour').prepend("<div id='grid'></div>");
        }
    }

    function getLocation(x, y){
        var name = "_"+x+"_"+y+"";
        console.log(name);
        var height = $("."+name+"").height();
        var width = $("."+name+"").width();
        var offset = $("."+name+"").offset();
        var x = offset.left + width / 2;
        var y = offset.top + height / 2;
        var coordinates = {x: x, y: y};
        return coordinates;
    }
    translations();

    function translations() {

        // translate
        function translateRight() {
            $('.square').animate({
                right: "-=500"
            }, 800, function () {
            });
        }

        function translateLeft() {
            $('.square').animate({
                left: "-=500"
            }, 800, function () {
            });
        }

        // Variables involved in calculating curve
        var x = 500;// destination x
        var y = 500;// destination y
        var offset = $('.square').offset();
        var width = $('.square').width();
        var height = $('.square').height();
        var original_x = offset.left + width / 2;
        var original_y = offset.top + height / 2;
        var bezier_x = 150;
        var bezier_y = 150;

        function translateCurve() {
            // var direction = Math.atan2(x,  y) / Math.PI * 180;
            // var distance = Math.hypot(original_x - x, original_y - y);
            // console.log('Direction: ' + direction);
            // console.log('Distance: ' + distance);

            for(var t = 0.0; t <= 1; t += 0.01){
                // Bezier curve calculations
                var new_x = Math.pow(1-t, 2)*original_x + 2*(1-t)*t*bezier_x + Math.pow(t, 2)*x;
                var new_y = Math.pow(1-t, 2)*original_y + 2*(1-t)*t*bezier_y + Math.pow(t,2)*y;

                // $('.square').animate({
                //     left: "+=" + new_x / 70
                // }, 2, function () {});
                //
                // $('.square').animate({
                //     top: "+=" + new_y / 100
                // }, 2, function () {});

                $('.square').animate({
                    height: "+=4.5",
                    width: "+=4.5",
                    rotate:
                }, 20, function () {});
            }

        }

        // Intro
        // translateLeft();
        // translateRight();
        // translateRight();
        // translateLeft();

        translateCurve();

    }

});
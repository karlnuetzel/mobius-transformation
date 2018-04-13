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

        function translateCurve(x, y) {
            var direction = Math.atan2(x, y) / Math.PI * 180
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
        var offset = $('.square').offset();
        var height = $('.square').height();
        var width = $('.square').width();
        var origin_x = offset.left + width / 2;
        var origin_y = offset.top + height / 2;
        translateCurve(x, y);
    }

});
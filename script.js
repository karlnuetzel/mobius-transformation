$(document).ready(function() {

    init();
    function init() {
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
        drawLine(1,2,6,8);
    }
    function getLocation(x, y){
        var name = "_"+x+"_"+y+"";
        var coordinates = getCenter(name);
        return coordinates;
    }

    function getCenter(name){
        var height = $("."+name+"").height();
        var width = $("."+name+"").width();
        var offset = $("."+name+"").offset();
        var x = offset.left + width / 2;
        var y = offset.top + height / 2;
        var coordinates = {x: x, y: y};
        return coordinates;
    }

    function getGridElement(x, y){
        var name = "_"+x+"_"+y+"";
        var element = $("."+name+"");
        return element;
    }

    function getSquareLocation(){

        var offset = $('.square').offset();
        var width = $('.square').width();
        var height = $('.square').height();
        var x = offset.left + width / 2;
        var y = offset.top + height / 2;
        var coordinates = {x: x, y: y};
        return coordinates;
    }


    function drawLine(x1, y1, x2, y2){
        var array = [];
        var origin = getLocation(x1, y1);
        var dest = getLocation(x2,y2);
        var xM = 6/5;
        var yInt = 4/5;
        var moveX = 0;
        var moveY = 0;
        for (x = 1; x < 6; x++){
            var num = xM * x;
            var location =  num + yInt;
            var newLocation = Math.round(location);
            var element = getGridElement(x, newLocation);
            element.css("background-color","yellow");
            var square = getSquareLocation();
            var newLoc = getCenter(element.attr("class"))
            console.log("square x" + square.x);
            moveX = Math.abs(square.x - newLoc.x);
            //array.push(moveX);

        }
        // console.log(array);
        // $('.square').animate({
        //     left: "+"+array[0]+""
        // }, 100, function () {});
        // console.log("square x" + square.y);
        // $('.square').animate({
        //     left: "+"+array[1]+""
        // }, 100, function () {});
        // console.log("square x" + square.y);
        // $('.square').animate({
        //     left: "+"+array[2]+""
        // }, 100, function () {});
        // console.log("square x" + square.y);
        // $('.square').animate({
        //     left: "+"+array[3]+""
        // }, 100, function () {});
        // console.log("square x" + square.y);
        // $('.square').animate({
        //     left: "+"+array[4]+""
        // }, 100, function () {})
        // console.log("square x" + square.y);
        // var square = getSquareLocation();

            // moveX = Math.abs(square.x - newLoc.x);
            // moveY = Math.abs(square.y - newLoc.y);
            //


            // console.log("move x" + moveX);
            // console.log("move y" + moveY);
            // // console.log("destX " +dest.x);
            // // console.log("destY " +dest.y);
            // console.log("square x " +square.x);
            // console.log("square y " +square.y);
            // $('.square').animate({  fake: 200, fake2: 10 }, {
            //     step: function(now,fx) {
            //         $(this).css('-webkit-transform','translate('+moveX+'px,'+moveY+'px )');
            //     },
            //     duration:'slow'
            // },'linear');

    }

    function translateCurve() {
        var loc = getLocation(17,9);
        var square = getCenter("square");
        console.log("original x " + square.x);
        console.log("original y " + square.y);
        console.log("destination x " + loc.x);
        console.log("destination y " + loc.y);
        var x = loc.x;// destination x
        var y = loc.y;// destination y
        var offset = $('.square').offset();
        var width = $('.square').width();
        var height = $('.square').height();
        var original_x = offset.left + width / 2;
        var original_y = offset.top + height / 2;
        var bezier_x = 150;
        var bezier_y = 150;

        for(var t = 0.0; t <= 1; t += 0.01){
            // Bezier curve calculations
            var new_x = Math.pow(1-t, 2)*original_x + 2*(1-t)*t*bezier_x + Math.pow(t, 2)*x;
            var new_y = Math.pow(1-t, 2)*original_y + 2*(1-t)*t*bezier_y + Math.pow(t,2)*y;

            console.log("new_x" + new_x);
            console.log("new_y" + new_x)


            $('.square').animate({
                left: "+=" + new_x / 70
            }, 2, function () {});

            $('.square').animate({
                top: "+=" + new_y / 100
            }, 2, function () {});

            var offset1 = $('.square').offset();
            var width1 = $('.square').width();
            var height1 = $('.square').height();
            var locx = offset1.left + width / 2;
            var locy = offset1.top + height / 2;
            console.log(locx);
            console.log(locy);
            // $('.square').animate({
            //     height: "+=4.5",
            //     width: "+=4.5"
            // }, 20, function () {});
        }

    }
});
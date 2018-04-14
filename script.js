$(document).ready(function() {

    init();
    function init() {
        var x = 20;
        var y = 1;
        var xN = -1;
        var yN = -10;

        for (i = 0; i < 200; i++) {
            if (x === 0) {
                x = 20;
                xN = -1;
                y++;
                yN++;
            }
            var coords1 = "_" + x + "_" + y + "";
            var coords2 = "_" + xN + "_" + y + "";
            var coords3 = "_" + xN + "_" + yN + "";
            var coords4 = "_" + x + "_" + yN + "";
            $('.quadOne').prepend("<div id='grid' class='" + coords1 + "'></div>");
            $('.quadTwo').prepend("<div id='grid' class='" + coords2 + "'></div>");
            $('.quadThree').prepend("<div id='grid' class='" + coords3 + "' ></div>");
            $('.quadFour').prepend("<div id='grid' class='" + coords4 + "'></div>");
            x--;
            xN--;
        }
        drawCircle(8, 0, 0);
        //var line = drawLine(1.5, 0);
        //walkLine(line);
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

    function walkPath(path){

    }

    function drawRectangle(height, width , origin){

        var y = Math.round(origin + (height / 2))
        var x = Math.round(origin + (width / 2));
        for (i = 4; i < 4; i++){
            drawLine()
        }

    }

    function drawCircle(r, originX, originY){

        var coordinates = getSquareLocation();
        for (i = 0; i < 360; i++){

            var x = Math.round(r * Math.sin(i)) + originX;
            var y = Math.round(r * Math.cos(i)) + originY;
            // console.log(x);
            // console.log(y);
            var element = getGridElement(x, y);
            element.css("background-color", "yellow");
        }
    }
    function drawLine(slope, y){

    }
    function drawLinearLine(slope, y){
        var listX = [];
        var listY = [];
        var listXN = [];
        var listYN = [];
        var yInt = 0;
        var x = 1;
        var xN = -1;
        var num = 1;
        var numN = 1;
        while (num < 10.5 && numN < 10.5){
            console.log(xN);
            num = slope*x + y;
            numN = slope*xN + y;
            if (num < 10.5 && numN < 10.5) {
                var location = Math.round(num + yInt);
                var locationN = Math.round(numN + yInt);
                var element = getGridElement(x, location);
                var elementN = getGridElement(xN, locationN);
                element.css("background-color", "yellow");
                elementN.css("background-color", "yellow");


                var square = getSquareLocation();
                var newLoc = getCenter(element.attr("class"))
                var newLocN = getCenter(element.attr("class"))




                var moveX = Math.abs(square.x - newLoc.x);
                var moveY = Math.abs(square.y - newLoc.y);
                var moveXN = Math.abs(square.x - newLocN.x);
                var moveYN = Math.abs(square.y - newLocN.y);

                listX.push(moveX);
                listXN.push(moveXN);
                listY.push(moveY);
                listYN.push(moveYN);
                xN--;
                x++;
            }
        }
        var line = {x: listX, y: listY, xN: listXN, yN: listYN};
        return line;
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
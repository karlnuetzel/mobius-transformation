$(document).ready(function() {

    init();
    function init() {
        var gridSize = 200;
        var x = 20;
        var y = 1;
        var xN = -1;
        var yN = -10;

        for (i = 0; i < gridSize; i++) {
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
        //call functions here
        drawRectangle(10, 5, -4, -4)
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

    function drawRectangle(height, width , originX, originY){

        var start = Math.round((originX - width / 2));
        var end = Math.round((originX + width / 2));
        drawLine(start, originY, end, originY);
        drawLine(start, originY, start, height);
        drawLine(end, originY, end, height);
        drawLine(start, height, end, height);

    }
    function drawCircle(r, originX, originY){

        for (i = 0; i < 360; i++){

            var x = Math.round(r * Math.sin(i)) + originX;
            var y = Math.round(r * Math.cos(i)) + originY;
            var element = getGridElement(x, y);
            element.css("background-color", "yellow");

        }

    }
    function drawLine(x1, y1, x2, y2){

        var m = ((y2 - y1)/(x2  - x1));
        b = (-1) * ((m * x2) - y2);
        if (!isFinite(m)){
            m = 0;
            x = x1;
            for (b = y1; b < y2; b++){

                var y = Math.round((m*x) + b);
                var element = getGridElement(x,y)
                element.css("background-color", "yellow");

            }
        }
        else {
            for (x = x1; x < x2; x++){

                var y = Math.round((m*x) + b);
                var element = getGridElement(x,y)
                element.css("background-color", "yellow");
            }
        }
    }
});
window.onload = function () {

    var sekunde = 00;
    var minute = 00;
    var apppenminute = document.getElementById("minute")
    var appendkunde = document.getElementById("sekunde")
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var Interval ;

    start.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(starUhr, 10);
    }
    stop.onclick = function() {
        clearInterval(Interval);
    }
    reset.onclick = function() {
        clearInterval(Interval);
        minute = "00";
        sekunde = "00";
        apppenminute.innerHTML = minute;
        appendkunde.innerHTML = sekunde;
    }



    function starUhr () {
        minute++;

        if(minute <= 9){
            apppenminute.innerHTML = "0" + minute;
        }

        if (minute > 9){
            apppenminute.innerHTML = minute;

        }

        if (minute > 99) {
            sekunde++;
            appendkunde.innerHTML = "0" + sekunde;
            minute = 0;
            apppenminute.innerHTML = "0" + 0;
        }

        if (sekunde > 9){
            appendkunde.innerHTML = sekunde;
        }

    }

}


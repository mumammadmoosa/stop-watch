var hourheading = document.getElementById("hour")
var minheading = document.getElementById("min")
var secheading = document.getElementById("sec")
var msecheading = document.getElementById("msec")

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;


function timer(){
    msec++;
    msecheading.innerHTML = msec;
    if(msec>=100){
        msec = 0;
        sec++;
        secheading.innerHTML = sec;
    }
    else if(sec>=60){
        min++;
        minheading.innerHTML = min;
        sec = 0;
    }
    else if(min>=60){
        hour++;
        hourheading.innerHTML = hour;
        min = 0;
    }
    
}
function start(x){
    var start =
    document.getElementById("stat-btn")
    interval = setInterval(timer,10);
}
function pause(){
    clearInterval(interval);
}
function reset(){
    var hour = 0;
    var min = 0;
    var sec = 0;
    var msec = 0;

    msecheading.innerHTML = msec;
    secheading.innerHTML = sec;
    minheading.innerHTML = min;
    hourheading.innerHTML = hour;
    pause();

}




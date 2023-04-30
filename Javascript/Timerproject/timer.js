
var a=document.getElementById('min');
var b=document.getElementById('seconds');
var c=document.getElementById('hour');
var Interval;
var seconds = 00; 
var tens = 00; 
var hour= 00;

function starttimer(){
    clearInterval(Interval)
    Interval=setInterval(timerfunction,20);
}

function stoptimer(){
     clearInterval(Interval)
}

function resetTimer(){
    clearInterval(Interval);
    seconds=00;
    tens=00;
    hour=00;
    a.innerHTML=seconds;
    b.innerHTML=tens;
    c.innerHTML=hour
}


function timerfunction(){
     tens++;        
     b.innerHTML=tens;
     if(tens==60){
        tens=0;
        seconds++
        a.innerHTML=seconds
     }
     if(seconds==60){
         seconds=0;
         hour++
         c.innerHTML=hour;
     }
}



let [milliseconds, seconds, minutes, hours] =[0,0,0,0];
let timerdisplay = document.querySelector('.timer');
let interval = null;

document.getElementById('start').addEventListener('click',()=>{
    if(interval!==null){
        clearInterval(interval);
    }
 
   interval= setInterval(displayTimer, 10);
   
  
})

document.getElementById('stop').addEventListener('click',()=>{
    
    clearInterval(interval);
    
})

document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(interval);

    [milliseconds, seconds, minutes, hours] =[0,0,0,0];
    timerdisplay.innerHTML=  `${hours} : ${minutes}: ${seconds} : ${milliseconds}`;
    
})
function displayTimer(){
    
milliseconds+=10;
if(milliseconds==1000){
    milliseconds=0;
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
            if(hours==24){
                hours=0;
            }
        }
    }
}

let h = hours <10 ? "0" +hours: hours;
let s = seconds <10 ? "0" +seconds: seconds;
let m = minutes <10 ? "0" +minutes: minutes;
let ms = milliseconds <10 ? "00" +milliseconds: milliseconds <100? "0"+milliseconds:milliseconds;

timerdisplay.innerHTML=  `${h} : ${m}: ${s} : ${ms}`;


}



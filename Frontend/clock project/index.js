//QuerySelector//

const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
let baslikDOM = document.querySelector('#Baslik')
let button = document.querySelector('button')

let myName = document.getElementById("myName")
myName.innerText = prompt("Lütfen adınızı yazın")


function updateClock(){

    
    const currentDate = new Date();
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let second = currentDate.getSeconds()
    const HourDeg = (hour/12)*360;
    hourEl.style.transform = `rotate(${HourDeg}deg)`;
    const minuteDeg = (minute/60)*360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second/60)*360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
   
        if (second < 10) {
            second = "0" + second
        }
        if (minute < 10){
            minute = "0" + minute
        }
      
    document.getElementById('myClock').innerHTML = `${hour}:${minute}:${second}`
    
    
}

setInterval(updateClock, 1000)
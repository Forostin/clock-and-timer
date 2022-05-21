let getTime = new Date().getTime();

function timeFunc() {
   getTime = new Date();
      let hours = getTime.getHours();
      let min = getTime.getMinutes();
      let sec = getTime.getSeconds();


document.querySelector("#info").innerHTML = `<h2>Время г.Киев ${hours} : ${min} : ${sec}</h2>`;

document.querySelector("#info").innerHTML += `<h2>Время г.Ванкувер ${hours-10} : ${min} : ${sec}</h2>`;

document.querySelector("#sec").style.transform = `rotate(${sec*6-22}deg)`;

document.querySelector("#min").style.transform = `rotate(${min*6-22}deg)`;

document.querySelector("#hour").style.transform = `rotate(${((hours*30 + (min*0.5)) - 15)}deg)`;
addTask(hours, min, sec);
}

function addTask(hours, min, sec) {
     let alarmHours = form.selectHours.value;
     let alarmMin = form.selectMin.value;
     let alarmSec = form.selectSec.value;
  if (hours==alarmHours && min==alarmMin && sec==alarmSec){
      soundAlarm();
  }
}

function  soundAlarm() {     
  let audio = new Audio();  // Создаём новую переменную audio
  audio.src = '1.mp3';      // Указываем путь к файлу "звук"
  audio.autoplay = true;    // Автоматически запускаем
}
 
// Таймер начало.

let countDounDate = new Date('Jan 1, 2023 00:00:00').getTime(); 

 
let countDounFunction = setInterval( function() {                    // Обновляем таймер каждую секунду.
   timeFunc();                                                       // Запускаем функцию поворот стрелок
     let distance = countDounDate - getTime;             // Высчитываем время между установленным временем и текущим 

  // Высчитываем время для дней, часов, минут, секунд
   let day = Math.floor(distance / ( 1000*60*60*24 ));
   let timerHours = Math.floor((distance  %  ( 1000*60*60*24 ))/(1000*60*60));
   let timerMinutes = Math.floor((distance  %  ( 1000*60*60 ))/(1000*60));
   let timerSecundes = Math.floor((distance  %  ( 1000*60 ))/1000);


document.getElementById("timer").innerHTML =`${day} дней ${timerHours} часов ${timerMinutes} мин ${timerSecundes} с`;
  if (distance <= 0){
     // clearInterval(countDounFunction);
     document.getElementById("timer").innerHTML="С НовымГодом!"
     }
},1000)  
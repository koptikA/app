function updateClock() {
    // Получаем текущее время на сервере
    const serverTime = new Date();
  
    // Получаем часовой пояс пользователя
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    // Создаем объект с опциями формата времени
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: userTimeZone,
    };
  
    // Получаем текущее время пользователя
    const userTime = serverTime.toLocaleString('en-US', timeOptions);
  
    // Вставляем время на страницу
    document.getElementById('clock').textContent = userTime;
  }
  
  // Обновляем время на странице каждую секунду
  setInterval(updateClock, 1000);




const dayEnd = new Date();
dayEnd.setHours(23, 59, 59, 999) //время окончания дня

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
       
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
       
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num){
    if (num >= 0 && num < 10) { 
        return '0' + num;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
        
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total === 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', dayEnd);
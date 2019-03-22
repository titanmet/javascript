function timer() {
  let deadline = '2019-03-29';

  function getTimeRemaning(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t / 1000) % 60),
          minutes = Math.floor((t / 1000 / 60) % 60),
          hours = Math.floor(t / 1000 / 60 / 60); // t/(1000*60*60)
      //  day = Math.floor((t/1000/60/60)%24);

      return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'second': seconds
      };

  }

  function setClock(id, endtime) {
      let timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds'),
          timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
          let t = getTimeRemaning(endtime);
          if (t.hours.toString().length == 1) {
              hours.textContent = '0' + t.hours;
          } else {
              hours.textContent = t.hours;
          }
          if (t.minutes.toString().length == 1) {
              minutes.textContent = '0' + t.minutes;
          } else {
              minutes.textContent = t.minutes;
          }
          if (t.second.toString().length == 1) {
              seconds.textContent = '0' + t.second;
          } else {
              seconds.textContent = t.second;
          }

          if (t.total <= 0) {
              clearInterval(timeInterval);
          }
      }
  }

  setClock('timer', deadline);
}

module.exports = timer;
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for(let i=a;i<tabContent.length;i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click',function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i=0; i<tab.length;i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

// Timer

let deadline = '2019-03-29';

function getTimeRemaning(endtime){
    let t=Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor(t/1000/60/60);  // t/(1000*60*60)
//  day = Math.floor((t/1000/60/60)%24);

return {
    'total' : t,
    'hours' : hours,
    'minutes' : minutes,
    'second' : seconds
};

}

function setClock(id,endtime){
    let timer = document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeInterval = setInterval(updateClock,1000);

    function updateClock(){
        let t = getTimeRemaning(endtime);
        if (t.hours.toString().length==1){
            hours.textContent = '0'+t.hours;    
        } else {
            hours.textContent = t.hours;
        }
        if (t.minutes.toString().length==1){
            minutes.textContent = '0'+t.minutes;    
        } else {
            minutes.textContent = t.minutes;
        }
        if (t.second.toString().length==1){
            seconds.textContent = '0'+t.second;
        } else {
            seconds.textContent = t.second;
        }

        if(t.total<=0){
            clearInterval(timeInterval);
        }
    }
}

setClock('timer',deadline);

// modal window

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click',function() {
    overlay.style.display='block';
    this.classList.add('more-splash'); 
    document.body.style.overflow = 'hidden';  
});
close.addEventListener('click',function() {
    overlay.style.display='none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

// form

let message = {
    loading: 'Загрузка...' ,
    success: 'Спасибо ! Скоро мы с вами свяжемся.',
    failure: 'Ошибка !'
}

let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);
    
});

});
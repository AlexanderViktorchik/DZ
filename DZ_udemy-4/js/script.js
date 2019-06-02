window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    //tabs

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    //timer

    let deadline = '2019-06-03';
    let timeout;

    function calcTime() {
        timeout = Date.parse(deadline) - new Date();

        let seconds = Math.floor((timeout / 1000) % 60),
            minutes = Math.floor((timeout / 1000 / 60) % 60),
            hours = Math.floor((timeout / 1000 / 60 / 60) % 24);

        return {
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        }
    }

    function showTime() {
        let hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            t = calcTime();

        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        for (let i = 0; i < 10; i++) {
            if (hours.textContent == i) {
                hours.textContent = '0' + i;
            }
            if (minutes.textContent == i) {
                minutes.textContent = '0' + i;
            }
            if (seconds.textContent == i) {
                seconds.textContent = '0' + i;
            }
        }

        if (timeout <= 0) {
            clearInterval(everyTime);
            hours.textContent = '00';    
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }

    let everyTime = setInterval(showTime, 1000);

    everyTime();
});
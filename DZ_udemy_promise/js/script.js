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

    let deadline = '2019-08-01';


    function calcTime(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);

        //days

        // let t = Date.parse(endtime) - Date.parse(new Date()),
        //     seconds = Math.floor((t / 1000) % 60),
        //     minutes = Math.floor((t / 1000 / 60) % 60),
        //     hours = Math.floor((t / 1000 / 60 / 60) % 24),
        //     days = Math.floor(t / 1000 / 60 / 60 / 24);

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        }
    }

    function showTime() {
        let hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            everyTime = setInterval(updateClock, 1000);

        function updateClock() {
            let t = calcTime(deadline);
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

            if (t.total <= 0) {
                clearInterval(everyTime);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    showTime();

    //modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn'),
        allInfo = document.querySelector('.info');

    allInfo.addEventListener('click', function () {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            for (let i = 0; i < descriptionBtn.length; i++) {
                if (target == descriptionBtn[i]) {
                    overlay.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    });


    //form

    //если нужно отправить в формате JSON

    /*
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let formData = new FormData(elem);
        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);
    */


    let message = {
        loading: 'Загрузка...',
        failure: 'Что-то пошло не так...',
        success: 'Спасибо! Скоро мы с вами свяжемся!'
    }

    let form = document.querySelector('.main-form'),
        input = document.querySelectorAll('input'),
        mainForm = document.getElementById('form'),
        inputFirstInMainForm = mainForm.querySelectorAll('input') [0],
        inputSecondInMainForm = mainForm.querySelectorAll('input') [1],
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    inputFirstInMainForm.setAttribute('name', 'email');
    inputSecondInMainForm.setAttribute('name', 'phone');

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-unrencoded');
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    request.send(data);
                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);

        });
    }

    sendForm(form);
    sendForm(mainForm);


});
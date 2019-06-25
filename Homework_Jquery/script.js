$(document).ready(function () {

    let chooseTour = $('.main_btna')[0],
        getConsult = $('.main_btn')[0],
        listTour = $('.col-sm-7 > nav > ul > li > [href = "#sheldure"]')[0],
        close = $('.close') [0];

    function showModal(elem) {
        elem.addEventListener('click', function () {
            $('.overlay').fadeToggle('slow');
            $('.modal').animate({
                opacity: "toggle",
                height: 'toggle'
            }, 3000);
        });
    }
    showModal(chooseTour);
    showModal(getConsult);
    showModal(listTour);
    showModal(close);


    // Отправка данных формы
    let message = {
        loading: 'Загрузка...',
        failure: 'Что-то пошло не так...',
        success: 'Спасибо! Скоро мы с вами свяжемся!'
    }

    let inputName = $('[name="name"]')[0],
        inputPhone = $('[name="phone"]')[0],
        inputMail = $('[name="mail"]')[0],
        textArea = $('textarea')[0],
        allInputs = [inputName, inputPhone, inputMail, textArea],
        form = $('.form-inline') [0],
        statusMessage = document.createElement('div');
  

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-unrencoded');
            let formData = new FormData(elem);

            function postData() {
                return new Promise(function (resolve, reject) {
                    request.send(formData);
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
                for (let i = 0; i < allInputs.length; i++) {
                    allInputs[i].value = '';
                }
            }

            function clearMessage() {
                close.addEventListener('click', function () {
                    elem.removeChild(statusMessage);
                });
            }

            postData()
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
                .then(clearMessage);

        });
    }

    sendForm(form);

});
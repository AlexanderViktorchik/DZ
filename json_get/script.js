let inputRub = document.querySelector('.rub'),
    inputUsd = document.querySelector('.usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url (по отношению к index.html), async, login, pass);
    request.open('GET', 'main.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // request.send(body); //если метод post
    request.send();

    //Свойства

    //status == 200
    //statusText
    //responseText  /  response - ответ от сервера, данные в формате JSON
    //readyState === 4


    //События (чаще всего используемые)

    //load
    //readystatechange

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value/data.usd; 
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });
});
// localStorage.setItem('number', 1);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem("number");
// localStorage.clear();



window.addEventListener('DOMContentLoaded', () => {

    let checkbox = document.getElementById('remember_me'),
        form = document.querySelector('form'),
        changeForm = document.querySelector('.login-help'),
        input1 = document.querySelectorAll('input')[0],
        input2 = document.querySelectorAll('input')[1];

    if (localStorage.getItem('isCheked') === 'true') {
        checkbox.checked = true; 
        // for (let i = 0; i < localStorage.length; i++) {
        //     input1.value = localStorage.key(i);
        //     input2.value = localStorage.getItem(localStorage.key(i));
        // }
    }

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'darkRed';
    }

    checkbox.addEventListener('click', () => {
        localStorage.setItem('isCheked', true);
    });

    changeForm.addEventListener('click', () => {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'darkRed';
    });

    form.addEventListener('submit', function set(event) {
        event.preventDefault();
        if (input1.value != '' && input2.value != '') {
            localStorage.setItem(input1.value, input2.value);
        }
    });

    let alex = {
        name: 'Alex',
        age: 23
    }

    let serializedAlex = JSON.stringify(alex);
    localStorage.setItem('Alex', serializedAlex);

    console.log(JSON.parse(localStorage.getItem('Alex')));
});
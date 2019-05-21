let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item');

console.log(menu);
console.log(menuItem);

menu.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement('li');
li.classList.add('menu-item');
li.innerText = 'Пятый пункт';
menu.appendChild(li);

let body = document.getElementsByTagName('body');
console.log(body);
body[0].style.background = 'url(img/apple_true.jpg) center no-repeat';

let trueApple = document.querySelector('#title');
trueApple.innerText = 'Мы продаем только подлинную технику Apple';

let column = document.querySelectorAll('.column');
let reklame = document.querySelector('.adv');

console.log(column);
console.log(reklame);
column[1].removeChild(reklame);

var question = prompt('Как вы относитель к технике Apple?');
var prompt = document.querySelector('#prompt');
prompt.innerText = question;


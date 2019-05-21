let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    list = document.querySelector('.list'),
    heart =  document.querySelectorAll('.heart'),
    circle = document.querySelectorAll('.circle'),
    wrapper = document.querySelector('.wrapper');//последовательность переменных не имеет значения

console.log(box);    
console.log(btn);
console.log(list);

box.style.backgroundColor = 'blue'; //поменял цвет с красного на синий

console.log(btn[2]);
list.removeChild(btn[2]);//удалил 3-ю кнопку
btn[1].style.borderRadius = '100%';//округлил вторую кнопку

circle[0].style.backgroundColor = 'red',    
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';//сделал светофор

document.body.removeChild(heart[0]);//удалил первый квадрат, индекс элементов удаляется вместе с элементом
heart[1].style.backgroundColor = 'orange';
heart[2].style.backgroundColor = 'darkred';//сменил цвета 2ого и 3его квадратов

heart.forEach(function(item) {
   item.style.backgroundColor = 'blue';//сменил цвет всех квадаратов на синий, метод forEach работает в связке с querySelectorAll
})

// for(let key of heart) {
//    key.style.backgroundColor = 'blue';     //массивы можно также перебирать с помощью --- for(key of), 
// }                                            квадраты также красятся в синий цвет

box.style.backgroundColor = 'orange';

let div = document.createElement('div'),
    text = document.createTextNode('тут был Вася-диагностик');

console.log(text);

div.classList.add('new_div');//добавил созданному ДИВу стили класса .new_div
document.body.appendChild(div);// вставил в конец страницы
wrapper.appendChild(div);//потом переставил после кругов(светофора)

console.log(heart[1]);
document.body.insertBefore(div, heart[1]);//потом переставил перед первым синим квадратом, уже отдельно от wrapper

document.body.insertBefore(box, heart[2]);//оранжевый квадрат поставил перед 2ым ссиним квадратом
document.body.replaceChild(box, heart[2]);//а потом поставил всесто него, и тем самым синий квадрат пропал
// box.innerHTML = 'Hello, world!';
box.innerText = 'Hello, world!';//подписал оранжевый квадрат

let body = document.getElementsByTagName('body');//важно как мы берем элемент
console.log(body);
body[0].style.backgroundColor = 'black';//если сформирован массив то обязательно указывать индекс элемента
// body.classList.add('body1');
// document.removeChild(body);


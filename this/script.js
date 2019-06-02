// function showThis (a, b) {
//     console.log(this);
//     function sum () {
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(2, 3);
// showThis(10, 3);




// let obj = {
//     a: 20,
//     b: 30,
//     sum: function () {
//         console.log(this);
//     };
// }
// obj.sum();




function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello, ' + this.name);
    };
}
User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
}

let ivan = new User('Ivan', 26),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
ivan.exit();





// let user = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow', 'Smoke']));   

// function count(number) {
//     return this * number;
// }   

// let double = count.bind(2);
// console.log(double(10));
// console.log(double(5));



// let btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });



// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind
// 5) Контекст вызова в обработчике события this - сам элемент события
// let age = document.getElementById('age');
// function showUser(surname, name) {
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
// }
// showUser('Петров', 'Иван');

//////////or

let newAge = document.getElementById('age'),
    ageValue = newAge.value;


function User(age, surname, name) {
    this.age = age;
    this.showUser = function () {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.age);
    };
}
let ivan = new User(ageValue, 'Петров', 'Иван'); 
ivan.showUser();
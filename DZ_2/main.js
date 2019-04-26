'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"); 

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');
    if ((typeof(a))==='string' && a != '' && b != '' && a.length < 50 && (typeof(a)) != null 
        && (typeof(b)) != null) {
        appData.expenses[a] = b;
    } else {
        i--;
    }
}

//Цикл do...while

// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');
//     if ((typeof(a))==='string' && a != '' && b != '' && a.length < 50 && (typeof(a)) != null 
//         && (typeof(b)) != null) {
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } while (i < 2)

//Цикл while

// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?', '');
//     if ((typeof(a))==='string' && a != '' && b != '' && a.length < 50 && (typeof(a)) != null 
//         && (typeof(b)) != null) {
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

alert('Ваш дневной бюджет: ' + appData.budget/30);
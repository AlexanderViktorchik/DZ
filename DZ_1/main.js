'use strict';

let money = prompt("Ваш бюджет на месяц?");
let timeData = prompt("Введите дату в формате YYYY-MM-DD");
let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = prompt('Во сколько обойдется?');
 

let appData = {
    money,
    timeData,
    expenses: {answer1 : answer2},
    optionalExpenses: {},
    income: [],
    savings: false
}

alert('Ваш дневной бюджет: ' + appData.money/30);
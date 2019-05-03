'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == '' || (typeof (money)) == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');
            if ((typeof (a)) === 'string' && a != '' && b != '' && a.length < 50 && (typeof (a)) != null &&
                (typeof (b)) != null) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let c = i + 1,
                d = prompt('Статья необязательных расходов?', '');
            if (d != '' &&
                (typeof (d)) != null) {
                console.log('done');
                appData.optionalExpenses[c] = d;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +((appData.budget / 30).toFixed());
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save / 12 * percent / 100;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome)
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while (typeof(items) != 'string' || typeof(items) == null || items == '') {
            items = prompt('Что принесет дополнительный доход? (Перечислите чeрез запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
        alert('Способы доп. заработка: ');
        appData.income.forEach(function(items, i) {
            i = i + 1;
            alert(i + ') - ' + items);
        })
    },
    showObject: function() {
        console.log('Наша программа включает в себя данные: ');   
        for (let key in appData) {
            console.log(key);
            }
        }
}

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    chekSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;
let sum = 0;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == '' || (typeof (money)) == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    budgetValue.textContent = money.toFixed();
    appData.timeData = time;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    if (money != undefined) {

        expensesBtn.addEventListener('click', function () {
            
            for (let i = 0; i < expensesItem.length; i++) {
                let a = expensesItem[i].value,
                    b = expensesItem[++i].value;
                if ((typeof (a)) === 'string' && a != '' && b != '' && a.length < 50 && (typeof (a)) != null &&
                    (typeof (b)) != null) {
                    console.log('done');
                    appData.expenses[a] = b;
                    sum += +b;
                } else {
                    i = i - 1;
                }
            }
            expensesValue.textContent = sum;
        });
        
        optionalExpensesBtn.addEventListener('click', function () {
            for (let i = 0; i < optionalExpensesItem.length; i++) {
                let opt = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = opt;
                optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            }
        });
        
        countBtn.addEventListener('click', function () {
            if (appData.budget != undefined) {
        
                appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
                dayBudgetValue.textContent = appData.moneyPerDay;
                if (appData.moneyPerDay < 100) {
                    levelValue.textContent = 'Низкий уровень достатка';
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    levelValue.textContent = 'Средний уровень достатка';
                } else if (appData.moneyPerDay > 2000) {
                    levelValue.textContent = 'Высокий уровень достатка';
                } else {
                    levelValue.textContent = 'Произошла ошибка';
                }
        
            } else {
                dayBudgetValue.textContent = 'Произошла ошибка';
            }
        });
        
        incomeItem.addEventListener('input', function () { //'change'
            let items = incomeItem.value;
            appData.income = items.split(', ');
            incomeValue.textContent = appData.income;
        });
        
        chekSavings.addEventListener('click', function () {
            if (appData.savings == false) {
                appData.savings = true;
            } else {
                appData.savings = false;
            }
        });
        
        sumValue.addEventListener('input', function () {
            if (appData.savings == true) {
                let sum = +sumValue.value,
                    percent = +percentValue.value;
                appData.monthIncome = sum / 12 * percent / 100;
                appData.yearIncome = sum * percent / 100;
                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
            }
        });
        
        percentValue.addEventListener('input', function () {
            if (appData.savings == true) {
                let sum = +sumValue.value,
                    percent = +percentValue.value;
                appData.monthIncome = sum / 12 * percent / 100;
                appData.yearIncome = sum * percent / 100;
                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
            }
        });


    }  
});


let startBtn = document.getElementById('start'),
    budgetVal = document.getElementsByClassName('budget-value')[0],
    budgetDay = document.getElementsByClassName('daybudget-value')[0],
    levelVal = document.getElementsByClassName('level-value')[0],
    expensesVal = document.getElementsByClassName('expenses-value')[0],
    expensesExp = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthSavingVal = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingVal = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item');
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    expresBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    summaVal = document.querySelector('.choose-sum'),
    percentVal = document.querySelector('.choose-percent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value'),
    choiseIncome = document.querySelector('.choose-income'),
    checkBoxSave = document.querySelector('#savings');

    let money,time;

startBtn.addEventListener('click',function() {
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    money = +prompt("Ваш бюджет на месяц?",'');
    while(isNaN(money) || money=='' || money==null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money.toFixed();
    yearVal.value = new Date(Date.parse(time)).getFullYear();
    monthVal.value = new Date(Date.parse(time)).getMonth() + 1;
    dayVal.value = new Date(Date.parse(time)).getDate();
});

expresBtn.addEventListener('click',function() {
    let sum = 0;

    for(let i=0;i<expensesItem.length;i++){
        let a=expensesItem[i].value,
            b=expensesItem[++i].value;
        if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a!='' && b!='' && a.length<50){
            appData.expenses[a]=b;
            sum += +b;
        }else{
            i=i-1;
        }
    }
    expensesVal.textContent = sum;
});

optionalExpensesBtn.addEventListener('click',function() {
    for (let i=0;i<optionalExpensesItem.length;i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        expensesExp.textContent += appData.optionalExpenses[i]+ ' ';
     }
});

countBudgetBtn.addEventListener('click',function() {
    if(appData.budget != undefined){
        appData.moneyPerDay=(appData.budget/30).toFixed();
        budgetDay.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay<100){
            levelVal.textContent="Уровень дохода минимальный !";
            } else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
            levelVal.textContent="Средний уровень достатка !";
            } else if(appData.moneyPerDay>2000){
            levelVal.textContent="Высокий уровень достатка !";
            } else {
            levelVal.textContent="Произошла ошибка!";
            };
    } else {
        budgetDay.textContent = "Произошла ошибка!"; 
    }
        
});

choiseIncome.addEventListener('input',function() {
    let items = choiseIncome.value;
    appData.income = items.split(', ');
    incomeVal.textContent = appData.income;
});

checkBoxSave.addEventListener('click',function() {
    if(appData.savings==true){
        appData.savings=false;
    }else{
        appData.savings=true;
    }
});

summaVal.addEventListener('input',function() {
    if(appData.savings==true){
        let sum = +summaVal.value,
        percent = +percentVal.value;

        appData.monthIncome=(sum/100/12*percent);
        appData.yearIncome=(sum/100*percent);

        monthSavingVal.textContent = appData.monthIncome.toFixed(1);
        yearSavingVal.textContent = appData.yearIncome.toFixed(1);
    }
});

percentVal.addEventListener('input',function() {
    if(appData.savings==true){
        let sum = +summaVal.value,
        percent = +percentVal.value;

        appData.monthIncome=(sum/100/12*percent);
        appData.yearIncome=(sum/100*percent);

        monthSavingVal.textContent = appData.monthIncome.toFixed(1);
        yearSavingVal.textContent = appData.yearIncome.toFixed(1);
    }
});

    
let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {} ,
        income:[] ,
        savings: false,
        chooseExpensive: function() {
            
        },
        detectDayBudget: function() {
            
        },
        detectLevel: function() {
            
        },
        checkSaving: function() {
            if(appData.savings=true){
                let = save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");
            }
            appData.monthIncome=(save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        },
        chooseOptExpenses: function() {
            
        },
        chooseIncome: function() {
            let items = prompt('Что принесет дополнительный доход ? (перечислете через запятую)','');
            if((typeof(items))==='string' && (typeof(items))!=null && items!=''){
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще ?'));
            appData.income.sort();
            }else{
                items = prompt('Что принесет дополнительный доход ? (перечислете через запятую)',''); 
            }
            document.write('Способы доп. заработка: ');
            appData.income.forEach(function(item,i,income) {
                document.write((i+1)+'.'+item+' ');
            });

        } 
    };

    for(let key in appData){
        console.log(key);
    }













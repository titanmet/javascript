let money,time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {} ,
    income:[] ,
    savings: true
};

function detectDayBudget() {
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while(isNaN(money) || money=='' || money==null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    for(let i=0;i<2;i++){
        let a=prompt("Введите обязательную статью расходов в этом месяце",''),
            b=prompt("Во сколько обойдется?",'');
        if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a!='' && b!='' && a.length<50){
            appData.expenses[a]=b;
        }else{
            i=i-1;
        }
    }
    appData.moneyPerDay=(appData.budget/30).toFixed();
}
detectDayBudget();

function detectLevel(){
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    if(appData.moneyPerDay<100){
        console.log("Уровень дохода минимальный.");
    }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
        console.log("Средний уровень достатка.");
    }else if(appData.moneyPerDay>2000){
        console.log("Высокий уровень достатка.");
    }else{
        console.log("Произошла ошибка!");
    };
}
detectLevel();

function chooseOptExpenses() {
   for (let i=0;i<3;i++){
       let a = prompt("Статья необязательных расходов?",''),
        b = +prompt("Во сколько обойдется?");
        if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a!='' && b!='' && a.length<50){
            appData.optionalExpenses[a]=b;
        }else{
            i=i-1;
        }
    }
}


function checkSaving(){
    if(appData.savings=true){
        let = save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    }
    appData.monthIncome=(save/100/12*percent).toFixed();
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
}
checkSaving();

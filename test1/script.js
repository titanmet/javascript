let money,time;

function start(){
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    while(isNaN(money) || money=='' || money==null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}
start();
    
let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {} ,
        income:[] ,
        savings: true,
        chooseExpensive: function() {
            for(let i=0;i<2;i++){
                let a=prompt("Введите обязательную статью расходов в этом месяце",''),
                    b=prompt("Во сколько обойдется?",'');
                if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a!='' && b!='' && a.length<50){
                    appData.expenses[a]=b;
                }else{
                    i=i-1;
                }
            }
        },
        detectDayBudget: function() {
            appData.moneyPerDay=(appData.budget/30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if(appData.moneyPerDay<100){
            console.log("Уровень дохода минимальный.");
            }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
            console.log("Средний уровень достатка.");
            }else if(appData.moneyPerDay>2000){
            console.log("Высокий уровень достатка.");
            }else{
            console.log("Произошла ошибка!");
            };
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
            for (let i=0;i<3;i++){
                let opt = prompt("Статья необязательных расходов?",'');
                appData.optionalExpenses[i]=opt;
             }
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



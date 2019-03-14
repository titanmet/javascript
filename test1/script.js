var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var quest1=prompt("Введите обязательную статью расходов в этом месяце");
var quest2=prompt("Во сколько обойдется?");

var imcome=[];
let appData = {
    budget: money,
    timeData: time,
    expenses: {quest1:quest2},
    optionalExpenses: {} ,
    income:[] ,
    savings: false
}

alert(appData*30);


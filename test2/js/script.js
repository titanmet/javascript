document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";
let reclama=document.querySelector('.adv'),
    menu=document.querySelector('.menu'),
    tegli=document.getElementsByTagName('li'),
    title=document.getElementById('title'),
    pr=document.querySelector('.prompt');

let li = document.createElement('li');
li.className='menu-item';
menu.appendChild(li);
li.innerHTML='Пятый пункт';
menu.replaceChild(tegli[1],tegli[2]);
let li2 = document.createElement('li'); 
li2.className='menu-item';
li2.innerHTML='Второй пункт';   
menu.insertBefore(li2,tegli[1]);
reclama.remove();
title.innerHTML='Мы продаем только подлинную технику Apple';
let quest=prompt('Ваше отношение к технике apple ?','');
pr.innerHTML=quest;


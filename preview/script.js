'use strict';

//localStorage.setItem('number', 5);

//console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true)
})


change.addEventListener('click', ()=> {
    if(localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';

    } else {
        localStorage.setItem('bg','changed');
        form.style.backgroundColor = 'red';
    }
});


const persone = {
    name: 'Alex',
    age: 25,
}

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));

// Регулярные выражение (паттерны и флаги(i, g, m))

/*const ans = prompt("Введите ваше имя");
const reg = /n/i;

console.log(ans.search(reg));
console.log(ans.match(reg));*/

const password = prompt('Введите пароль');

console.log(password.replace(/./g, '*'));


// Гетеры и сетеры

const homme = {
    name: 'Alex',
    age: 25,

    get UserAge(){
        return this.age;
    },

    set UserAge(num) {
        return this.age = num;
    }


};

console.log(homme.UserAge = 30);
console.log(homme.UserAge);
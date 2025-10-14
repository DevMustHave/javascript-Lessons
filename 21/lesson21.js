// Логические операторы
"use strict";

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Bon appetit');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries === 1);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'abracadabra');

// if (hamburger === 3 && cola && fries === 1) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport || alexReport || samReport || mariaReport);
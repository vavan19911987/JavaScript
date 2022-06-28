'use strict';


// const checkbox = document.querySelector('input');
// const para = document.querySelector('p');

// let shoppingDone = false;

// checkbox.addEventListener('change', () => {
//     checkbox.disabled = true;
//     shoppingDone = true;
//     updateAllowance();

// });

// function updateAllowance() {
//     let childsAllowance;

//     if (shoppingDone === true) {
//         childsAllowance = 10;
//     } else {
//         childsAllowance = 5;
//     }

//     para.textContent = `На этой неделе   \$${childsAllowance} получит ребенок.`;
// }

// let select = document.querySelector('select');
// let html = document.querySelector('.output');

// select.onchange = function () {
//     let choice = select.value;

//     switch (choice) {
//         case 'black':
//             update('black', 'white');

//             break;
//         case 'white':
//             update('white', 'black');
//             break;

//         default:
//             break;
//     }
// };

// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }



// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
//     console.log('Error');
// }


// alert( null || 2 || undefined );

// alert( alert(1) || 2 || alert(3) );

// let age;

// age > 14 && < 90;

// let num = 50;

// while (num <= 55) {
//    console.log(num);
//    num++;
// }

// do {
//    console.log(num);
//    num++;
// } 

// while (num < 55);

// let num = 50;

// for (let i = 1; i < 10; i++) {

//    if (i === 6) {
//       // break;
//       continue;
//    }
//    console.log(i);
// }

// let result = '';
// const lines = 7;

// for(let i = 1; i < lines; i++) {

//    for(let j = 0; j < i; j++) {
//       result += '*';
//    }

//    result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//    console.log(`First level: ${i}`);
//    for (let j = 0; j < 3; j++) {
//       console.log(`Second level: ${j}`);
//       for (let k = 0; k < 3; k++) {
//          if (k === 2) {
//             continue first;
//          }
//          console.log(`Third levej: ${k}`);
//       }
//    }
// }


// function firstTask() {
//    // Пишем решение вот тут
//    let num = 5;
//    while ( num <= 10) {
//        console.log(num);
//        num++;
//    }

// }
// firstTask();

// function secondTask() {
//    // Пишем решение вот тут
//    for (let i = 20; i >= 10; i--) {



//        if (i === 13) {
//          break;
//        }
//        console.log(i);
//    }
// }

// secondTask();


// function thirdTask() {
//    // Пишем решение вот ту
//    for (let i = 2; i <= 10; i++) {

//       if (i % 2 === 0) {
//          console.log(i);

//       }

//    }
// }
// thirdTask();


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//    let i = 2;

//    while (i <= 16) {
//        if (i % 2 === 0) {
//            i++;
//            continue;
//        } else {
//            console.log(i);
//        }
//        i++;
//    }
// }

// fourthTask();


// function fifthTask() {
//    const arrayOfNumbers = [];

//    for (let i = 5; i < 11; i++) {
//        arrayOfNumbers[i - 5] = i;
//    }

//    console.log(arrayOfNumbers);
//    return arrayOfNumbers;
// }

// fifthTask();

// for (let num = 0; num < 5; num++) {
//    if (num == 2 || num == 1) {
//       continue;
//    }
//    console.log(num);
// }


// function firstTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const arr = [3, 5, 8, 16, 20, 23, 50];
//    const result = [];

//    // Пишем решение вот тут

//    result[0] = arr[0];
//    result[1] = arr[1];
//    result[2] = arr[2];
//    result[3] = arr[3];
//    result[4] = arr[4];
//    result[5] = arr[5];
//    result[6] = arr[6];

//    // Не трогаем
//    return result;

// }
// firstTask();

// function secondTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const data = [5, 10, 'Shopping', 20, 'Homework'];

//    // Пишем решение вот тут
//    data[0] = 10;
//    data[1] = 20;
//    data[2] = 'shopping - done';
//    data[3] = 40;
//    data[4] = 'Homework - done';

//    console.log(data);

//    // Не трогаем
//    return data;
// }
// secondTask();

// function thirdTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const data = [5, 10, 'Shopping', 20, 'Homework'];
//    const result = [];

//    // Пишем решение вот тут
//    for (let i = 1; i <= data.length; i++) {
//       result[i - 1] = data[data.length - i];
//   }

//   console.log(result);

//    // Не трогаем
//    return result;
// }

// thirdTask();

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
const lines = 5;
let result = '';

// for (let i = 0; i <= lines; i++) {

//    for (let j = 0; j < lines - i; j++) {
//       result += " ";
//    }
//    for (let j = 0; j < 2 * i + 1; j++) {
//       result += "*";
//    }

//    result += '\n';
// }
// console.log(result);

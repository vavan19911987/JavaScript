/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';


// let names = prompt('Как ваше имя?','');


// const personalMovieDB = {
//     name: names,
//     info: {},
// };

// let a = prompt('Сколько вам лет?','');
// let b = prompt('Восколько Вы пошли в школу?',''); 
// let c = prompt('Восколько вы закончики школу?','');
// // let d = prompt('На сколько оцените его?','');

// personalMovieDB.info['Моё имя ' + names] = "мой возраст " + a;
// personalMovieDB.info['Пошёл в первый класс ' + b] = 'Закончил школу ' + c;

// console.log(personalMovieDB);


// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }



// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//     var choice = select.value;

//     if (choice === 'sunny') {
//         para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
//     } else if (choice === 'rainy') {
//         para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
//     } else if (choice === 'snowing') {
//         para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
//     } else if (choice === 'overcast') {
//         para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//     } else {
//         para.textContent = '';
//     }
// }


// var cheese = 'Cheddar';

// if (cheese) {
//     console.log('Ура! Есть сыр для приготовления бутерброда.');
// } else {
//     console.log('Сегодня нет сыра для бутерброда.');
// }


// var shoppingDone = false;

// if (shoppingDone) {
//     var childsAllowance = 10;
// } else {
//     var childsAllowance = 5;
// }



// var select = document.querySelector('select');
// var html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.onchange = function() {
//   ( select.value === 'black' ) ? update('black','white') : update('white','black');
// };

// select.onchange = function() {
//     var choice = select.value;
//     var days = 31;
//     if(choice === 'Февраль') {
//     days = 28;
//     } else if(choice === 'Апрель' || choice === 'Июнь' || choice === 'Сентябрь'|| choice === 'Ноябрь') {
//     days = 30;
//     }

//     createCalendar(days, choice);
//    }


// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);


// function setWeather() {
//     var choice = select.value;

//     switch (choice) {
//         case 'sunny':
//             para.textContent = 'Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.';
//             break;
//         case 'rainy':
//             para.textContent = 'На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго';
//             break;
//         case 'snowing':
//             para.textContent = 'Идёт снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
//             break;
//         case 'overcast':
//             para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
//             break;
//         default:
//             para.textContent = '';
//     }
// }



// switch (choice) {
//     case "black":
//     update('black','white');
//     break;
//     case "white":
//     update('white','black');
//     break;
//     case "purple":
//     update('purple','white');
//     break;
//     case "yellow":
//     update('yellow','purple');
//     break;
//     case "psychedelic":
//     update('green','white');
//     break;
//     }
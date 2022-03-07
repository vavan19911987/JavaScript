'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы смотрели", '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    

};

for (let i = 0; i < 1; i++) {
    const a = prompt("Название последнего фильма", '');

    if (a != null && a != '') {
        personalMovieDB.movies12 = a;
        console.log('Ok');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Хорошо');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}

console.log(personalMovieDB);
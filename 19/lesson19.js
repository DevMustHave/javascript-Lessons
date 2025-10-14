// Практика
"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actor': {},
    'genres': [],
    'privat': false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько цените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько цените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
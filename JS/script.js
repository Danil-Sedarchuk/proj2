const numberOfFilms = +prompt("Сколько вы фильмов уже посмотрели","");
const lastFilm = prompt("Один из последних просмотренных фильмов?","");
const assess = prompt("На сколько вы его оцените?","");
const lastFilm1 = prompt("Один из последних просмотренных фильмов?","");
const assess1 = prompt("На сколько вы его оцените?","");



let personalMovieDB = {

count : numberOfFilms,
movies :{[lastFilm] : assess,[lastFilm1] : assess1 },
actors:{},
genres:[],
privat: false 
};

console.log(personalMovieDB);





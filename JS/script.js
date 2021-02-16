let numberOfFilms='',lastFilm='',assess='',lastFilm1='',asses1='';
let num = 1;
numberOfFilms = +prompt("Сколько вы фильмов уже посмотрели","");
// 1 ый способ 
// for (let i = 1; i <= 5; i++) {


//     switch (i) {
//             case 1: 
//                 numberOfFilms = +prompt("Сколько вы фильмов уже посмотрели","");
//                 if ((!numberOfFilms) || (numberOfFilms.length > 50)) {
//                     numberOfFilms='';
//                     i=0;
//                     console.log('Ошибка при вводе данных!');
//                 }
//                 break;
                
//             case 2:
//                 lastFilm = prompt("Один из последних просмотренных фильмов?","");
//                 if ((!lastFilm) || (lastFilm.length > 50)) {
//                     lastFilm='';
//                     i = 1; 
//                     console.log('Ошибка при вводе данных!');
//                 } 
//                 break;

//             case 3:
//                 assess = +prompt("На сколько вы его оцените?","");    
//                 if ((!assess) || (assess.length > 50)) {
//                     assess='';
//                     i = 2; 
//                     console.log('Ошибка при вводе данных!');
//                 } 
//                 break;

                
            
//         } 

//     }
    
// let i = 0;
// while (i<2) {


// } 



    // ,[lastFilm1] : asses1

// while (num > 3) {

//     if (num === 3) {
//         assess = +prompt("Один из последних просмотренных фильмов?","");
//                 if ((!assess) || (assess.length > 50)) {
//                     assess='';
//                     num=2;
//                     console.log('Ошибка при вводе данных!');
//                 }
//                 num++;
//                 break;
//     }

//     if (num === 2) {
//         lastFilm = prompt("Один из последних просмотренных фильмов?","");
//                 if ((!lastFilm) || (lastFilm.length > 50)) {
//                     lastFilm='';
//                     num=1;
//                     console.log('Ошибка при вводе данных!');
//                 }
//                 num++;
//                 break;
//     }
   
//     if (num === 1) {
//         numberOfFilms = +prompt("Сколько вы фильмов уже посмотрели","");
//                 if ((!numberOfFilms) || (numberOfFilms.length > 50)) {
//                     numberOfFilms='';
//                     num=0;
//                     console.log('Ошибка при вводе данных!');
//                 }
//                 num++;
//                 break;
//     }
// }

let personalMovieDB = {
count : numberOfFilms,
movies :{},
actors:{},
genres:[],
privat: false 
};

let i = 0;

do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        i++;
    } else {
        console.log('error');
       
    }

} while (i < 2);


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }



if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
   console.log('Произошла ошибка!');
}

console.log(personalMovieDB);





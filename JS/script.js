let lastFilm='',assess='',lastFilm1='',asses1='';
let num = 1;

let personalMovieDB = {

start: function() {
    personalMovieDB.count = +prompt("Сколько вы фильмов уже посмотрели","");
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько вы фильмов уже посмотрели","");
    }

},
rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
},

 detectPersonalLevel:function() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
       console.log('Произошла ошибка!');
    }
},

writeYourGenres: function() {
 
    for (let i = 1; i <=3; i++) {
        let a = prompt(`${i} Ваш любимый жанр?`, '');
        if (a != null  && a != ''  && a.length < 50){
            personalMovieDB.genres[i-1] = a;          
        }   else{
            console.log('Error!');
            i--;
        }
    }
   personalMovieDB.genres.forEach(function(item,i,arr) {
       console.log(`Любимый жанр ${i+1} - это ${item}`);
   }
   ); 
},

showMyDB: function (privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
},

toggleVisibleMyDB: function() {
if (personalMovieDB.privat) {personalMovieDB.privat=false;} else {personalMovieDB.privat = true;}
},

count : 0,
movies :{},
actors:{},
genres:[],
privat: false,

};



personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();



// // f


// personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);




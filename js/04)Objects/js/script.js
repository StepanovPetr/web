"use strict";
//alert("Hello word");
//const result = confirm("Быть или не быть");
let numberOfFilms;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        personalMovieDB.count = numberOfFilms;

        for (let i = 0; i < numberOfFilms; i++) {
            let movieName;
            let movieGrade;

            while (movieName === undefined || movieName === "" || movieGrade === "" || movieName.length > 50) {
                movieName = prompt("Один из последних просмотренных фильмов?", "");
                movieGrade = +prompt("На сколько оценили его?", "");
            }

            personalMovieDB.movies[movieName] = movieGrade;
        }
    },
    detectPersonalLevel: function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        }

        if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классный зритель");
        }

        if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр ${i + 1}`, "");
            personalMovieDB.genres[i] = genre;
        }

        this.genres.forEach((item, index) => {
            console.log(`Любимый жанр  ${index + 1} -- ${item}`);
          });

    },
    toggleVisibleMyDB: function() {
        this.private = (this.private)
            ? false
            : true;
    },
    showMyDB: function showMyDB(){
        if(!personalMovieDB.private){
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
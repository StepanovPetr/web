"use strict";
//alert("Hello word");
//const result = confirm("Быть или не быть");
let numberOfFilms;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function start(){
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

function rememberMyFilms(){
    personalMovieDB.count = numberOfFilms;

    for (let i = 0; i < numberOfFilms; i++) {
        let movieName;
        let movieGrade;
    
        while (movieName === undefined || movieName === ""  || movieGrade === "" || movieName.length > 50) {
            movieName = prompt("Один из последних просмотренных фильмов?", "");
            movieGrade = +prompt("На сколько оценили его?", "");
        } 
    
        personalMovieDB.movies[movieName] = movieGrade;
    }
}

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотренно довольно мало фильмов"); 
    }
    
    if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
        console.log("Вы классный зритель"); 
    }
    
    if(personalMovieDB.count > 30){
        console.log("Вы киноман"); 
    }
}

function showMyDB(){
    if(!personalMovieDB.private){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const genre = prompt(`Ваш любимый жанр ${i + 1}`, "");
        personalMovieDB.genres[i] = genre;
    }
}

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();



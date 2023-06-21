/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// Событие загрузуи DOM дерева.
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    document.getElementsByClassName('promo__adv')[0].remove();

    let genre = document.getElementsByClassName('promo__genre')[0];
    genre.textContent = "драма";

    let promo = document.getElementsByClassName('promo__bg')[0];
    promo.style.backgroundImage = "url('img/bg.jpg')";

    const updateMovies = () => {
        let films = document.querySelector(".promo__interactive-list");
        films.innerHTML = "";

        movieDB.movies.sort();
        movieDB.movies.forEach((element, i) => {
            films.innerHTML +=
                `<li class="promo__interactive-item">
                ${i + 1} -  ${element} 
             <div class = "delete"> </div>
            </li>`;
        });
        setDeleteElem();
    };

    updateMovies();

    document.querySelector(".add").addEventListener("submit", addMovie);
    setDeleteElem();

    function setDeleteElem() {
        document.querySelectorAll(".delete").forEach((i) => {
            i.addEventListener("click", deleteElem);
        });
    }

    function deleteElem(event) {
        let name = event.currentTarget.parentElement.innerText;
        let index = Number.parseInt(name);
        movieDB.movies.splice(index - 1, 1);
        updateMovies();
    }

    function addMovie(event) {
        // Отмена стандартного поведения браузера (Обновление страницы).
        event.preventDefault();

        let newMovie = document.querySelector(".adding__input").value;

        if (newMovie != null && newMovie != "") {
            if (newMovie.length > 23) {
                newMovie = newMovie.substr(0, 22) + '...';
            }

            if (document.querySelector("input[type='checkbox']").checked == true) {
                console.log("Добавляем любимый фильм.");
            }

            // Добавить
            movieDB.movies.push(newMovie);
            updateMovies();
        }
    }
});


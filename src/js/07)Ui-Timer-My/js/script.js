let position = 0;
let toDown = true;
let transform = 0;
const box = document.querySelector(".box");

// Повторяющиесся действия по времени.
const intervalId = setInterval(move, 50);

// Отложенный вызов.
//const timerId = setTimeout(() => { confirm("Шекер бекер?"); }, 3000);

function move() {

    if (position === 300) {
        toDown = false;
    }
    if (position === 0) {
        toDown = true;
    }

    if (toDown) {
        box.style.top = `${position}px`;
        box.style.left = `${position}px`;
        position++;
    }
    else {
        box.style.top = `${position}px`;
        box.style.left = `${position}px`;
        position--;
    }

    // Поворот Элемента.
    box.style.transform = `rotate(${transform}deg)`;
    
    if(transform < 360){
        transform++;
    } else {
        transform =0;
    }
}
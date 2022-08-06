const newYear = '2022-1-1';

function setTimer() {
    const diff = Date.parse(newYear) - new Date();
    const timer = new Date(diff);

    let seconds = Math.floor((timer / (1000) % 60 ));
    let minutes = Math.floor((timer / 1000 / 60) % 60 );
    let hours = Math.floor((timer / (1000 * 60 * 60) % 24 ));
    let days = Math.floor((timer / (1000 * 60 * 60 * 24)));

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
}

const timer = setInterval(setTimer, 100);
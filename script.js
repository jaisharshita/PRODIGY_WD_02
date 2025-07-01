const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("minute")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearButton = document.getElementsByClassName("clear-button")[0];

let isPlay = false;
let secCount = 0;
let centiCount = 0;
let sec;
let centiSec;
let minCount = 0;
let min;
let isReset = false;
let lapItemm = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
} 

const play = () => {
    if (!isPlay && !isReset) {
        playButton.innerHTML = 'Pause';
        min = setInterval (()  => {
                minute.innerHTML = ` ${++minCount} : `;
            }, 60*1000);

        sec = setInterval (()  => {
                if (secCount === 60) {
                    secCount = 0;
                }
                second.innerHTML = `&nbsp; ${++secCount} : `;
            }, 1000);

        centiSec = setInterval (()  => {
            if (centiCount === 100) {
                centiCount = 0;
            }
            centiSecond.innerHTML = `&nbsp; ${++centiCount} `;
            }, 10);

        isPlay = true;
        isReset = true;

    } else {
        playButton.innerHTML = 'Play';
        clearInterval(sec);
        clearInterval(centiSec);
        clearInterval(min);
        isPlay = false;
        isReset = false;
    }
    toggleButton();
}


const reset = () => { 

    clearInterval(min);
    clearInterval(sec);
    clearInterval(centiSec);

    isPlay = false;
    isReset = false;
    secCount = 0;
    centiCount = 0;
    centiCount = 0;

    playButton.innerHTML = 'Play';
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");

    second.innerHTML = '&nbsp; 0 :';
    centiSecond.innerHTML = ' &nbsp; 0';
    minute.innerHTML = ' 0 :';

    clearButton.classList.remove("hidden");

} 

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class" , "item");
    number.setAttribute("class","num");
    timeStamp.setAttribute("class","stamp");

    number.innerText = `${++lapItemm}.`;

    timeStamp.innerHTML = `${minCount} : ${secCount} : ${centiCount}: `;
    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearAll = () => {
    laps.innerHTML = ' ';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);

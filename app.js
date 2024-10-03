function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const intervalId = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}


const display = document.querySelector('#timer'); 
const startButton = document.querySelector('#start-button');

startButton.addEventListener('click', function() {
 let duration = prompt('Enter time in seconds' ); 
 
 while(!Number.isInteger(Number(duration)) || Number(duration) <= 0 || isNaN(duration)){
    duration = prompt('Something went wrong, please enter an integer number bigger than 0' );
 }

 duration = Number(duration);
 
 startTimer(duration, display);
})



import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


/*
Scott Sandilands 
CITP-4316
Project 3
*/
document.getElementById("startButton").addEventListener("click", function() {
    let time = parseInt(document.getElementById("timeInput").value);
    if (isNaN(time) || time < 1 || time > 60) {
        alert("Please enter a value between 1 and 60");
        return;
    }

    let countdownElement = document.getElementById("countdown");
    countdownElement.textContent = time;

    let timer = setInterval(function() {
        time--;
        countdownElement.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Timer has ended";
        }
    }, 1000);
});

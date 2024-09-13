<script setup>
  import {ref} from 'vue'

  const timeInput = ref(null)
  const countdownText = ref('')
  let timer = null

  const startTimer = () =>{
    let time = parseInt(timeInput.value)

    if (isNaN(time) || time < 1 || time > 60) {
      alerts("Please Enter a Value Between 1 and 60")
      return
    }

    //clear any existing timer
    if (timer) {
      clearInterval(timer)
    }

    //start the countdown
    timer = setInterval(() => {
      time--
      countdownText.value = time

      if (time <= 0) {
        clearInterval(timer)
        countdownText.value = "Timer has ended"
      }
    }, 1000)
  }
</script>

<template>
  <div class="box">
    <h1>Set Timer (Enter a Number Between 1 - 60 Seconds)</h1>
    <input type="number" v-model="timeInput" :min="1" :max="60" placeholder="Seconds">
    <button @click="startTimer">Start Timer</button>
    <div id="countdown">{{ countdownText }}</div>
  </div>
</template>
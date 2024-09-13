<script setup>
  import {ref} from 'vue'
    
</script>

<template>
  <div class="box">
    <h1>Set Timer (Enter a Number Between 1 - 60 Seconds)</h1>
    <input type="number" v-model="timeInput" :min="1" :max="60" placeholder="Seconds">
    <button @click="startTimer">Start Timer</button>
    <div id="countdown">{{ countdownText }}</div>
  </div>
</template>
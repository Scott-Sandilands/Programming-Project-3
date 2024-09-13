<script setup>
import {ref} from 'vue'


</script>

<template>
<!-- 
Scott Sandilands 
CITP-4316
Project 3
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Timer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h1>Set Timer (Enter a Number Between 1 - 60 Seconds)</h1>
        <input type="number" id="timeInput" min="1" max="60" placeholder="Seconds" />
        <button id="startButton">Start Timer</button>
        <div id="countdown"></div>
    </div>
    <script src="main.js"></script>
</body>
</html>

</template>


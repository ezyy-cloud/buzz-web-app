<script setup lang="ts">
let date: Date = new Date();  
</script>

<template>
   <div class="container">Made by <a href="https://ezyy.cloud"><b>Ezyy Cloud</b></a> - {{ date.getFullYear() }}</div>
</template>

<style scoped>
.container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0);
    color: rgb(255,255,255);
    padding-top: 1vh;
    padding-bottom: 1vh;
}
</style>

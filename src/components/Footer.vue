<script setup lang="ts">
let date: Date = new Date();
</script>

<template>
  <div class="container">
    <div>
      Another <a href="https://ezyy.cloud"><b>Ezyy</b> Cloud</a> -
      {{ date.getFullYear() }}
    </div>
    <v-spacer></v-spacer>
    <v-btn color="rgba(255,0,255)" class="logIn">Log In</v-btn>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  bottom: 0;
  padding-left: 10px;
  width: 100vw;
  background-color: rgba(0, 0, 0);
  color: rgb(255, 255, 255);
  padding-top: 1vh;
  padding-bottom: 1vh;
}

.logIn {
  position: absolute;
  bottom: 0;
  right: 0px;
  margin-right: 0px;
  z-index: 4;
  font-family: "Product Sans black", sans-serif;
  color: rgb(0, 0, 0);
}
</style>

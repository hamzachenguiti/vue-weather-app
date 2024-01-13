<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex flex-col font-Roboto min-h-screen bg-weather-primary">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>

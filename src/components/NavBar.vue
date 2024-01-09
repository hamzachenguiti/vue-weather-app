<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg p-4">
    <nav class="flex flex-col sm:flex-row items-center gap-4 text-white container">
      <RouterLink :to="{ name: 'home' }">
        <div class="flex gap-2 items-center">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">The Global Weather</p>
        </div>
      </RouterLink>
      <div class="flex justify-end flex-1 gap-3">
        <i
          class="fa-solid fa-circle-info cursor-pointer hover:text-weather-secondary duration-150 text-xl"
        ></i>
        <i
          class="fa-solid fa-plus cursor-pointer hover:text-weather-secondary duration-150 text-xl"
        ></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="py-6 px-3 bg-weather-secondary rounded-md shadow-md">
    <div class="flex">
      <div class="flex flex-col flex-1">
        <h2 class="text-3xl">{{ city.city }}</h2>
        <h3>{{ city.state }}</h3>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-3xl self-end">{{ Math.round(city.weather.main.temp) }}&deg;</p>
        <div class="flex gap-2">
          <span class="text-xs">
            H:
            {{ Math.round(city.weather.main.temp_max) }}&deg;
          </span>
          <span class="text-xs">
            L:
            {{ Math.round(city.weather.main.temp_min) }}&deg;
          </span>
        </div>
      </div>
    </div>
    <div
      class="flex items-center gap-2 pt-4 w-fit text-white cursor-pointer duration-150 hover:text-green-500"
      @click="goToCityView(city)"
    >
      <i class="fa-solid fa-arrow-right"></i>
      <p>View Weather</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  city: {
    type: Object,
    default: () => {}
  },
  goToCityView: {
    type: Function,
    required: true
  }
});
</script>

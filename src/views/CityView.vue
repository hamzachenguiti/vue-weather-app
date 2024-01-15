<template>
  <Suspense>
    <template #fallback>
      <h2 class="text-center tetx-3xl text-white">Loading...</h2>
    </template>
    <CityWeather />
  </Suspense>
</template>

<script setup>
import CityWeather from '@/components/CityWeather.vue';
</script>

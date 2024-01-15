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
          @click="toggleModal"
        ></i>
        <i
          class="fa-solid fa-plus cursor-pointer hover:text-weather-secondary duration-150 text-xl"
          @click="addCityToLocalStorage"
          v-if="route.query.preview"
        ></i>
      </div>

      <BaseModal :isModalActive="isModalActive" @close-modal="toggleModal">
        <div class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            The Local Weather allows you to track the current and future weather of cities of your
            choosing.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>Search for your city by entering the name into the search bar.</li>
            <li>
              Select a city within the results, this will take you to the current weather for your
              selection.
            </li>
            <li>
              Track the city by clicking on the "+" icon in the top right. This will save the city
              to view at a later time on the home page.
            </li>
          </ol>

          <h2 class="text-2xl">Removing a city</h2>
          <p>
            If you no longer wish to track a city, simply select the city within the home page. At
            the bottom of the page, there will be am option to delete the city.
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { uid } from 'uid';
import BaseModal from './BaseModal.vue';

const savedCities = ref([]);
const route = useRoute();
const router = useRouter();
const addCityToLocalStorage = () => {
  if (localStorage.getItem('savedCities')) {
    const parsedSavedCities = JSON.parse(localStorage.getItem('savedCities'));
    savedCities.value = parsedSavedCities;
  }
  const locationObject = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng
    }
  };
  savedCities.value.push(locationObject);
  localStorage.setItem('savedCities', JSON.stringify(savedCities.value));

  const query = Object.assign({}, route.query);
  delete query.preview;
  router.replace({ query });
};

const isModalActive = ref(false);
const toggleModal = () => {
  isModalActive.value = !isModalActive.value;
};
</script>

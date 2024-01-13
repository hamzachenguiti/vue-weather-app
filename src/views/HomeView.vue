<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search for a city or a state"
        class="bg-transparent px-1 py-2 w-full border-b focus:bg-weather-secondary outline-none duration-100"
      />
      <ul class="absolute top-[66px] w-full py-2 px-1 bg-weather-secondary" v-if="searchResults">
        <p v-if="searchError">Something went wrong, try again.</p>
        <p v-if="!searchError && searchResults.length === 0">
          No results match your query, try a different term.
        </p>
        <template v-else>
          <li
            v-for="searchResult in searchResults"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const mapboxAPIKey = import.meta.env.VITE_MAPBOX_API_KEY;
const searchQuery = ref('');
const searchResults = ref(null);
const queryTimeout = ref(null);
const searchError = ref(false);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value === '') {
      searchResults.value = null;
    } else {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        searchResults.value = response.data.features;
      } catch {
        searchError.value = true;
      }
      return;
    }
  }, 300);
};

const router = useRouter();
const previewCity = (searchResult) => {
  const [city, state] = searchResult.place_name.split(',');
  router.push({
    name: 'cityView',
    params: { city: city.replaceAll(' ', ''), state: state.replaceAll(' ', '') },
    query: {
      lat: searchResult.geometry.coordinates[0],
      lng: searchResult.geometry.coordinates[1],
      preview: true
    }
  });
};
</script>

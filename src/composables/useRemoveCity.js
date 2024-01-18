import { useRouter } from 'vue-router';

export default function useRemoveCity(cityID) {
  const router = useRouter();

  function removeCity() {
    const cities = JSON.parse(localStorage.getItem('savedCities'));
    const updatedCities = cities.filter((city) => city.id === cityID);
    localStorage.setItem('savedCities', JSON.stringify(updatedCities));
    router.push({
      name: 'home'
    });
  }

  return { removeCity };
}

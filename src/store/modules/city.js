import { defineStore } from 'pinia';
import { getAllCities } from '@/service';

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async getAllCitiesData() {
      const res = await getAllCities();
      this.allCities = res.data;
    }
  },
});

export default useCityStore;
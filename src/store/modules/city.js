import { defineStore } from 'pinia';
import { getAllCities } from '@/service';

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: '北京'
    }
  }),
  getters: {},
  actions: {
    async fetchAllCitiesData() {
      const res = await getAllCities();
      this.allCities = res.data;
    }
  },
});

export default useCityStore;
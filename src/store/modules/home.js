import { defineStore } from 'pinia';
import { getHomeHotSuggests } from '@/service';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: {},
    categories: [],
  }),

  actions: {
    async fetchHotSuggestsDate() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    }
  },
});

export default useHomeStore;
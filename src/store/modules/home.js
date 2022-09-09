import { defineStore } from 'pinia';
import { 
  getHomeHotSuggests, getHomeCategories, getHoustList
} from '@/service';

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: {},
    categories: [],
    currentPage: 1,
    houseList: []
  }),

  actions: {
    async fetchHotSuggestsData() {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data;
    },

    async fetchHomeCaterogies() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },

    async fetchHomeList() {
      const res = await getHoustList(this.currentPage);
      this.houseList.push(...res.data);
      this.currentPage++;
    }
  },
});

export default useHomeStore;
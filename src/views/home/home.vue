<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="banner-image">
    </div>
    <home-search-box />
    <home-category />
    <div class="top-search" v-if="isShowTopSearch">
      <search-bar />
    </div>
    <home-content />
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue';
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategory from './components/home-category.vue';
import HomeContent from './components/home-content.vue';
import useHomeStore from '@/store/modules/home';
import useScorll from '@/hooks/useScroll';
import SearchBar from '../../components/search-bar/search-bar.vue';

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchHomeCaterogies();
homeStore.fetchHomeList();

const { isBottom, scrollTop } = useScorll();
watch(isBottom, () => {
  // console.log('isBottom', isBottom.value);
  homeStore.fetchHomeList();
  isBottom.value = false;
});

// 控制顶部搜索框
const isShowTopSearch = computed(() => scrollTop.value >= 550);

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 40px;

}
.banner {
  img {
    width: 100%;
  }
}

</style>
<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="banner-image">
    </div>
    <home-search-box />
    <home-category />
    <home-content />
    <button @click="clickMoreHouse" class="btn">More House</button>
  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategory from './components/home-category.vue';
import HomeContent from './components/home-content.vue';
import useHomeStore from '@/store/modules/home';

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchHomeCaterogies();
homeStore.fetchHomeList();

const clickMoreHouse = () => {
  homeStore.fetchHomeList();
}

</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

.btn {
  // height: 100px;
}

</style>
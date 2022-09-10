<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="banner-image">
    </div>
    <home-search-box />
    <home-category />
    <home-content />
  </div>
</template>

<script setup>
import { watch } from 'vue';
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';
import HomeCategory from './components/home-category.vue';
import HomeContent from './components/home-content.vue';
import useHomeStore from '@/store/modules/home';
import useScorll from '@/hooks/useScroll';

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchHomeCaterogies();
homeStore.fetchHomeList();

const { isBottom } = useScorll();
watch(isBottom, () => {
  // console.log('isBottom', isBottom.value);
  homeStore.fetchHomeList();
  isBottom.value = false;
});

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
<template>
  <div class="home">
    <home-nav-bar />

    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="banner-image">
    </div>

    <home-search-box />
  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue';
import HomeSearchBox from './components/home-search-box.vue';

</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

</style>
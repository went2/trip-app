<template>
  <div class="home">
    <home-nav-bar />

    <div class="banner">
      <img src="@/assets/image/home/banner.webp" alt="banner-image">
    </div>

    <div class="location">
      <div class="city">北京</div>
      <div class="my-location">
        <span class="text">我的位置</span>
        <img src="@/assets/image/home/icon_location.png" alt="location-image">
      </div>
    </div>

  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue';

</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

.location {
  display: flex;
  padding: 0 20px;
  align-items: center;
  height: 44px;

  .city {
    flex: 1;
  }
  
  .my-location {
    .text {
      font-size: 13px;
      position: relative;
      bottom: 3px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

</style>
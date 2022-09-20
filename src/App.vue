<template>
  <router-view v-slot="props" :class=" !route.meta.hideTabBar && 'with-tabbar'">
    <keep-alive include="home">
      <component :is="props.Component" />
    </keep-alive>
  </router-view>
  <tab-bar v-if="!route.meta.hideTabBar" />
  <loading />
</template>

<script setup>
import TabBar from './components/tab-bar/tab-bar.vue';
import Loading from './components/loading/loading.vue';

import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>

/* .with-tabbar {
  height: calc(100vh - 50px);
  overflow-y: auto;
} */
</style>

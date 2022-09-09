<template>
  <router-view :class=" !route.meta.hideTabBar && 'with-tabbar'" />
  <tab-bar v-if="!route.meta.hideTabBar" />
</template>

<script setup>
import TabBar from './components/tab-bar/tab-bar.vue';

import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>

/* .with-tabbar {
  height: calc(100vh - 50px);
  overflow-y: auto;
} */
</style>

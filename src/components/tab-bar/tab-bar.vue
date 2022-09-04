<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <router-link :to="item.path" class="tab-bar-item">
        <img :src="getAssetURL(item.img)" alt="">
        <span class="text">{{ item.text }}</span>
      </router-link>
    </template>
  </div>
</template>

<script setup>

import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load-assets';

</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #eee;

  .tab-bar-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
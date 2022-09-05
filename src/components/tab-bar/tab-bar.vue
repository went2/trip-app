<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex">
      <template
        v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item
          :class="{ active: index === currentIndex }"
          @click="itemClick(item)"
        >
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="index !== currentIndex" :src="getAssetURL(item.img)" alt="">
            <img v-else :src="getAssetURL(item.imgActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load-assets';
import { useRouter } from 'vue-router';

const router = useRouter();

const currentIndex = ref(0);
const itemClick = (item) => {
  router.push(item.path)
}

</script>

<style lang="less" scoped>
.tab-bar {
  .active {
    color: var(--primary-color);
  }
}
</style>
<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" route active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item
          :to="item.path"
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
import { ref, watch } from 'vue';
import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load-assets';
import { useRoute } from 'vue-router';

const currentIndex = ref(0);

const route = useRoute();
watch(route, () => {
  console.log('route.path', route.path);
  const index = tabbarData.findIndex((item) => item.path === route.path);
  if(index === -1) return;
  currentIndex.value = index;
});

</script>

<style lang="less" scoped>
.tab-bar {
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }
  img {
    height: 26px;
  }
}
</style>
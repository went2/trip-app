<template>
  <div class="category">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="cate-item">
        <img :src="item.pictureUrl" :alt="item.title">
        <div class="text">{{item.title}}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore();
homeStore.fetchHomeCaterogies();
const { categories } = storeToRefs(homeStore);

</script>

<style lang="less" scoped>

.category {
  height: 80px;
  display: flex;
  overflow-x: auto;
  padding: 0 10px;
  margin-top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }

  .cate-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70px;
    flex-shrink: 0;
    align-items: center;
    
    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 8px;
    }
    
  }
}
</style>
<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <HosueItemT3 v-if="item.discoveryContentType === 3" :item-data="item.data" @click="clickCity(item.data)" />
        <HouseItemT9 v-else-if="item.discoveryContentType === 9" :item-data="item.data" @click="clickCity(item.data)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import HosueItemT3 from '@/components/house-item-t3/hosue-item-t3.vue';
import HouseItemT9 from '@/components/house-item-t9/house-item-t9.vue';
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);

const router = useRouter();
const clickCity = (item) => {
  // console.log(item.houseId);
  router.push('/detail/' + item.houseId);
}

</script>

<style lang="less" scoped>
.content {
  padding: 10px 10px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
  .list {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
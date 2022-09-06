<template>
  <div class="city top-page">
    <form action="/">
      <van-search
        v-model="seachValue"
        shape="round"
        show-action
        placeholder="城市/区域/位置"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(item,index) in cityData" :key="index">
        <van-tab :title="item.title" :name="item.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import { getAllCities } from '@/service/modules/city';

const router = useRouter();

// 搜索
const seachValue = ref("");
const onSearch = () => {

};

const onCancel = () => {
  router.back();
};

// tab切换
const tabActive = ref("");



// 获取所有城市信息
const cityData = ref([]);

getAllCities().then((data) => {
  const rawData = data.data;
  // console.log(Object.keys(rawData));

  Object.keys(rawData).forEach((key) => {
    cityData.value.push(rawData[key]);
  });

}).catch((err) => {console.error('获取城市信息失败', err)});


</script>

<style lang="less" scoped>



</style>
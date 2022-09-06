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

    <div class="hot-cities">
      <div class="text">
        <span>热门</span>
      </div>
      <div class="city-buttons">
        <template v-for="(item, index) in cityData[0].hotCities" :key="item.cityId">
          <van-button round class="button" color="#fed7a6">{{ item.cityName }}</van-button>
        </template>
      </div>
    </div>
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

.hot-cities {
  margin-top: 5px;
  padding: 0 15px;

  .text {
    margin-left: 5px;
    margin-bottom: 15px;
    color: grey;
  }

  .city-buttons {
    --van-button-default-height: 40px !important;
    :deep(.van-button--default) {
      width: 78px;
      height: 35px;
    }
    .button {
      margin: 5px 0 5px 8px;
    }
  }
}

</style>
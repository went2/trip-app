<template>
  <div class="city top-page">
    <div class="top">
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
      <van-tabs 
        v-model:active="activeTab" 
        color="#ff9854"
      >
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab
            :title="value.title" 
            :name="key"
          />
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <div class="hot-cities">
        <div class="text">
          <span>热门</span>
        </div>
        <div class="city-buttons">
          <template v-for="(item, index) in allCities[activeTab]?.hotCities" :key="item.cityId">
            <van-button round class="button" color="#fed7a6">{{ item.cityName }}</van-button>
          </template>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCityStore from '@/store/modules/city';

const router = useRouter();

// 搜索
const seachValue = ref("");
const onSearch = () => {};

const onCancel = () => {
  router.back();
};

// tab切换
const activeTab = ref("");

// 获取所有城市信息
const cityStore = useCityStore();
cityStore.getAllCitiesData();
const { allCities } = storeToRefs(cityStore);

</script>

<style lang="less" scoped>

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}

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
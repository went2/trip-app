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
      
      <!-- <van-index-bar>
        <van-index-anchor index="热门" />
        <div class="hot-cities">
          <template v-for="(city, index) in currentCityGroup?.hotCities" :key="city.cityId">
            <div class="hot-city-item">{{ city.cityName }}</div>
          </template>
        </div>

        <template v-for="(cityGroup, index) in currentCityGroup?.cities" :key="index">
          <van-index-anchor :index="cityGroup.group" />
            <template v-for="city in cityGroup.cities" :key="city.cityId">
              <van-cell :title="city.cityName" />
            </template>
        </template>

      </van-index-bar> -->

    <template v-for="(value, key, index) in allCities" :key="index">
      <city-group v-show="activeTab === key" :current-group="value"/>
    </template>
      
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCityStore from '@/store/modules/city';

import CityGroup from './components/city-group.vue';

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

const currentCityGroup = computed(() => allCities.value[activeTab.value]);

</script>

<style lang="less" scoped>

.top {
  position: relative;
  z-index: 9;
}

.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}



</style>
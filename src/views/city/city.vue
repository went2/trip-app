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
      <!-- <div class="hot-cities">
        <div class="text">
          <span>热门</span>
        </div>
        <div class="city-buttons">
          <template v-for="(item, index) in allCities[activeTab]?.hotCities" :key="item.cityId">
            <van-button round class="button" color="#fed7a6">{{ item.cityName }}</van-button>
          </template>
        </div>
      </div> -->

      <van-index-bar>
        <van-index-anchor index="热门" />
        <div class="hot-cities">
          <template v-for="(city, index) in currentCityGroup?.hotCities" :key="city.cityId">
            <div class="hot-city-item">{{ city.cityName }}</div>
          </template>
        </div>


        <van-index-anchor index="B" />
        <van-cell title="Text" />
        <van-cell title="Text" />
        <van-cell title="Text" />

      </van-index-bar>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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

.hot-cities {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .hot-city-item {
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 14px;
    color: #000;
    font-size: 12px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}

</style>
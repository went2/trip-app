<template>
  <div class="city-group">
    <van-index-bar :sticky="false">
        <van-index-anchor index="热门" />
        <div class="hot-cities">
          <template v-for="(city, index) in currentGroup.hotCities" :key="city.cityId">
            <div class="hot-city-item">{{ city.cityName }}</div>
          </template>
        </div>

        <template v-for="(cityGroup, index) in currentGroup.cities" :key="index">
          <van-index-anchor :index="cityGroup.group" />
            <template v-for="city in cityGroup.cities" :key="city.cityId">
              <van-cell :title="city.cityName" />
            </template>
        </template>

      </van-index-bar>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  currentGroup: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
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
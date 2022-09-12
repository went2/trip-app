<template>
  <div class="search-bar">
    <div class="inner">
      <div class="select-time">
        <div class="item start">
          <div class="name">住</div>
          <div class="date">{{ startDateStr }}</div>
        </div>
        <div class="item end">
          <div class="name">离</div>
          <div class="date">{{ endDateStr }}</div>
        </div>
      </div>
      <div class="tip">
        <div class="keyword">关键词/位置/民宿</div>
      </div>
      <div class="right">
        <i class="icon-search"></i>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import useMainStore from '@/store/modules/main';
import { storeToRefs } from 'pinia';

import { formatMonthDay, getDiffDays } from '@/utils/format-date';

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);

const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD'));
const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD'));

</script>

<style lang="less" scoped>
.search-bar {
  height: 80px;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  padding: 13px 10px 15px 15px;
  background-color: #fff;
  // border: 1px solid red;

  .inner {
    background-color: #f4f4f6;
    border-radius: 8px;
    padding: 6px 10px;
    display: flex;

    .select-time {
      padding: 4px;
      flex-direction: column;

      .item {
        display: flex;

        align-items: center;
      }
      .name {
        color: #999
      }
      .date {
        margin-left: 5px;
      }
    }

    .tip {
      margin-left: 15px;
      flex: 1;
      .keyword {
        max-width: 155px;
        height: 100%;
        line-height: 40px;
        letter-spacing: 1px;
      }
    }

    .right {
      display: flex;
      align-items: center;
    }

    .icon-search {
      width: 24px;
      height: 24px;
      display: inline-block;
      background-image: url(../../assets/image/home/home-sprite.png);
      background-position: -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>
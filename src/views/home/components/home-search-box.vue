<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="clickCity">{{ currentCity.cityName }}</div>
      <div class="my-position" @click="clickPosition">
        <span class="text">我的位置</span>
        <img src="@/assets/image/home/icon_location.png" alt="location-image">
      </div>
    </div>

    <!-- 选择日期范围 -->
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共 {{ stayCount }} 晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm"
    />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
          class="suggest-item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
          @click="clickSuggest(item)"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <button class="btn" @click="clickSearch">开始搜索</button>
    </div>
  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCityStore from '@/store/modules/city';
import useHomeStore from '@/store/modules/home';

import { formatMonthDay, getDiffDays } from '@/utils/format-date';

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);

const router = useRouter();

const clickPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.error('获取位置失败', err)
    }
  )
}

const clickCity = () => {
  router.push('/city');
}

// 选择日期范围
const nowDate = new Date();
const nextDay = new Date();
nextDay.setDate((new Date()).getDate() + 1);

const startDate = ref(formatMonthDay(nowDate));
const endDate = ref(formatMonthDay(nextDay));
const stayCount = ref(getDiffDays(nowDate, nextDay));

const showCalendar = ref(false);
const onConfirm = (value) => {
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  startDate.value = formatMonthDay(selectStartDate);
  endDate.value = formatMonthDay(selectEndDate);
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);

  showCalendar.value = false;
}

const clickSuggest = (item) => {
  console.log(toRaw(item));
  toSearch();
}

// search btn handler
const clickSearch = () => toSearch();

// common methods
const toSearch = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityId,
    }
  });
}

</script>

<style lang="less" scoped>
.location {
  display: flex;
  padding: 0 20px;
  align-items: center;
  height: 44px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .my-position {
    .text {
      font-size: 13px;
      position: relative;
      bottom: 3px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    flex-direction: column;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  margin-top: 10px;
  .start {
    border-right: 1px solid  var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .suggest-item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  display: flex;
  align-items: center;

  .btn {
    flex: 1;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    border: none;
    padding: 10px;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-info :top-info="mainPart.topModule" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import { getHouseDetail } from '@/service'
import { computed } from '@vue/reactivity';
import DetailSwipe from './components/detail_01-swipe.vue';
import DetailInfo from './components/detail_02-info.vue';

const router = useRouter();
const route = useRoute();

// 返回
const onClickLeft = () => router.back();

// 获取数据
const detailInfo = ref({});
const mainPart = computed(() => detailInfo.value.mainPart)

getHouseDetail(route.params.id).then(res => {
  detailInfo.value = res.data;
});

</script>

<style lang="less" scoped>

</style>
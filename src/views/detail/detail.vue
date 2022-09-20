<template>
  <div class="detail top-page" ref="detailRef">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <detail-navbar :eles="nameAndEl" ref="navbarRef" v-if="isShowNav" @item-clicked="navClicked"/>
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-info name="名称" :ref="getRefs" :top-info="mainPart.topModule" />
      <detail-facility name="设施" :ref="getRefs" :facility-data="mainPart.dynamicModule.facilityModule.houseFacility" />
      <detail-landlord name="房东" :ref="getRefs" :landlord-data="mainPart.dynamicModule.landlordModule" />
      <detail-comment name="评论" :ref="getRefs" :comment-data="mainPart.dynamicModule.commentModule" />
      <detail-rules name="须知" :ref="getRefs" :rules-data="mainPart.dynamicModule.rulesModule" />
      <detail-map name="周边" :ref="getRefs" :map-data="mainPart.dynamicModule.positionModule" />
      <detail-explanation :expla-data="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/image/detail/icon_ensure.png" alt="">
      <div class="text">行走大地 永不止息</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import { getHouseDetail } from '@/service'
import { computed } from '@vue/reactivity';
import DetailSwipe from './components/detail_01-swipe.vue';
import DetailInfo from './components/detail_02-info.vue';
import DetailFacility from './components/detail_03-facility.vue';
import DetailLandlord from './components/detail_04-landlord.vue';
import DetailComment from './components/detail_05-comment.vue';
import DetailRules from './components/detail_06-rules.vue';
import DetailMap from './components/detail_07-map.vue';
import DetailExplanation from './components/detai_08-explanation.vue';
import DetailNavbar from './components/detail_09-navbar.vue';
import useScorll from '@/hooks/useScroll';

const router = useRouter();
const route = useRoute();

// 返回
const onClickLeft = () => router.back();

// 获取数据
const detailInfo = ref({});
const mainPart = computed(() => detailInfo.value.mainPart);

getHouseDetail(route.params.id).then(res => {
  detailInfo.value = res.data;
});

// 批量绑定组件ref,获取其根元素
const nameAndEl = ref({});
const getRefs = (comp) => {
  if(!comp) return; // 组件挂载和卸载时都会执行 :ref的函数，卸载时comp为null
  const name = comp.$el.getAttribute('name');
  nameAndEl.value[name] = comp.$el;
}

// 处理详情页滚动
const detailRef = ref();
const { scrollTop } = useScorll(detailRef);
const isShowNav = computed(() => {
  return scrollTop.value >= 500;
});

let isClickScroll = false;
let currentDistance = -1;
const navClicked = (compName) => {
  const targetEle = nameAndEl.value[compName];

  isClickScroll = true;
  currentDistance = targetEle.offsetTop - 50;
  console.log('currentDistance',currentDistance)

  detailRef.value.scrollTo({
    top: currentDistance,
    behavior: 'smooth'
  });
}

// 滚动时匹配顶部tab对应的index
const navbarRef = ref();
watch(scrollTop, (newValue) => {
  // console.log('newValue', Math.floor(newValue))
  if( Math.round(newValue) === currentDistance ) {
    isClickScroll = false;
  }
  if(isClickScroll) return; // 当tab通过点击进行滚动时，取消匹配，因为已经自动匹配了
  // 获取所有组件的offsetTop, 存到数组
  const eles = Object.values(nameAndEl.value);
  const allOffset = eles.map(item => item.offsetTop);

  // 匹配newValue在数组中的位置，找到第一个大于它的值的索引
  let targetIndex = allOffset.length-1;
  for(let i=0; i<allOffset.length; i++) {
    if(allOffset[i] > newValue + 50) {
      targetIndex = i-1;
      break;
    }
  }
  // 设置为tabbar的激活index
  navbarRef.value?.setActiveIndex(targetIndex);
});

</script>

<style lang="less" scoped>
.detail {
  .footer {
    width: 130px;
    margin: 35px auto;
    img {
      width: 100%;
    }
    .text {
      margin-top: 8px;
      text-align: center;
      color: #555;
    }
  }
}
</style>
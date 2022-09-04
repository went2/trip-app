<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <router-link :to="item.path" class="tab-bar-item">
        <img src="../../assets/image/tabbar/tab_message.png" alt="order">
        <span class="text">{{ item.text }}</span>
      </router-link>
    </template>
  </div>
</template>

<script setup>

const tabbarData = [
  {
    text: '首页',
    img: '@/assets/image/tabbar/tab_home.png',
    imgActive: '@/assets/image/tabbar/tab_home_active.png',
    path: '/home'
  },
  {
    text: '收藏',
    img: '@/assets/image/tabbar/tab_favor.png',
    imgActive: '@/assets/image/tabbar/tab_favor_active.png',
    path: '/favor'
  },
  {
    text: '订单',
    img: '@/assets/image/tabbar/tab_order.png',
    imgActive: '@/assets/image/tabbar/tab_order_active.png',
    path: '/order'
  },
  {
    text: '消息',
    img: '@/assets/image/tabbar/tab_message.png',
    imgActive: '@/assets/image/tabbar/tab_message.png',
    path: '/message'
  },
]

</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #eee;

  .tab-bar-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
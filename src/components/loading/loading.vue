<template>
  <div class="loading" v-show="mainStore.isLoading">
    <div class="img-bg">
      <img src="@/assets/image/home/full-screen-loading.gif" alt="loading-img">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';

const mainStore = useMainStore();

</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  .img-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: url(@/assets/image/home/loading-bg.png) 0 0 / 100% 100%;
  }

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 13px;
  }
}

</style>
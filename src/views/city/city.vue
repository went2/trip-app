<template>
  <div class="city top-page">
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

    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab title="国内·港澳台" name="a"></van-tab>
      <van-tab title="海外" name="b"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

// 搜索
const seachValue = ref("");
const onSearch = () => {

};

const onCancel = () => {
  router.back();
};

// tab切换
const tabActive = ref("a");


</script>

<style lang="less" scoped>



</style>
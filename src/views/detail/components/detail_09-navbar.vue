<template>
  <div class="nav-bar">
    <van-tabbar :fixed="false">
      <template v-for="(item,index) in names" :key="index">
        <van-tabbar-item>
          <span>{{ item }}</span>
        </van-tabbar-item>
      </template>
      </van-tabbar>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  eles: {
    type: Object,
    default: () => ({})
  }
});

const names = computed(() => {
  // console.log(props.eles);
  return Object.keys(props.eles);
})
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>
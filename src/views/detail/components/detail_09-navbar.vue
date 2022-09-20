<template>
  <div class="nav-bar">
    <van-tabbar :fixed="false" v-model="activeIndex">
      <template v-for="(item,index) in names" :key="index">
        <van-tabbar-item @click="clickItem(index)">
          <span>{{ item }}</span>
        </van-tabbar-item>
      </template>
      </van-tabbar>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const activeIndex = ref(0);
const setActiveIndex = (newIndex) => {
  activeIndex.value = newIndex;
};

const props = defineProps({
  eles: {
    type: Object,
    default: () => ({})
  }
});

const names = computed(() => {
  return Object.keys(props.eles);
});

const emit = defineEmits(['item-clicked']);
const clickItem = (idx) => {
  const compName = names.value[idx];
  emit('item-clicked', compName);
}

defineExpose({ setActiveIndex });
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
<template>
  <div class="top-info">
    <div class="title">{{ topInfo.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfo.houseTags" :key="index">
        <span
          class="tag-item"
          v-if="item.tagText"
          :style="{color: item.tagText.color, background: getBackground(item.tagText.background)}"
        >
          {{ item.tagText.text }}
        </span>
      </template>  
    </div>
  </div>
</template>

<script setup>
import { getBackground } from '@/utils/style-helper';

defineProps({
  topInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.top-info {
  padding: 10px 9px;
  .title {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    line-height: 1.25;
  }

  .tags {
    margin-top: 8px;
    display: flex;
    align-items: center;
    .tag-item {
      font-size: 13px;
      padding: 2px;
      margin: 0 3px;
    }
  }
}

</style>
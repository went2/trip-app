<template>
  <div class="top-info">
    <div class="title">{{ topInfo.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfo.houseTags" :key="index">
        <div
          class="tag-item"
          v-if="item.tagText"
        >
          {{ item.tagText.text }}
        </div>
      </template>  
    </div>
  </div>
</template>

<script setup>

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

  }
}

</style>
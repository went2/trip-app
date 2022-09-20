<template>
  <div class="price-explanation">
    <div class="title">
      {{ explaData.title }}
    </div>
    <div class="content">
      {{ explaData.introduction }}
    </div>
  </div>
</template>

<script setup>

defineProps({
  explaData: {
    type: Object,
    default: () => ({})
  }
});

</script>

<style lang="less" scoped>
.price-explanation {
  padding: 20px;

  .title {
    font-weight: 600;
    font-size: 15px;
  }
  .content {
    margin-top: 10px;
    color: #333;
    line-height: 1.3;
  }
}
</style>
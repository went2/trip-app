<template>
  <div class="comment">
    <detail-section title="热门评论" :more-text="`查看全部${commentData.totalCountStr}条评论`">
      <div class="inner detail-section-inner">
        <div class="overall"></div>
          
        <div class="tagList"></div>

        <div class="user-comment"></div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  commentData: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style lang="less" scoped>
.inner {
  .overall {

  }

  .tagList {

  }

  .user-comment {

  }
}
</style>
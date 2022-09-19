<template>
  <div class="rules">
    <detail-section title="预定须知" :show-footer="false">
      <div class="inner detail-section-inner">
        <template v-for="(item, index) in rulesData.orderRules" :key="index">
          <div class="rule-item">
            <div class="left">
              <div class="title">{{ item.title }}</div>
              <div class="intro">{{ item.introduction }}</div>
            </div>
            <div class="tips" v-if="item.tips">查看说明</div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  rulesData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.inner {
  padding: 10px 6px;
  .rule-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 13px;
    .left {
      flex: 1;
      display: flex;
      .title {
        color: #999;
        width: 65px;
      }
      .intro {
        margin-left: 12px;
        color: #333;
      }
    }
  }
}
</style>
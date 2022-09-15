<template>
  <div class="section">
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <slot>
        <div>默认内容</div>
      </slot> 
    </div>

    <div class="footer">
      <div class="more">
        <span>{{ moreText }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  moreText:{
    type: String,
    default: '查看更多'
  }
})

</script>

<style lang="less" scoped>
.section {
  margin: 5px 0;
  padding: 10px;
  border-top: 3px solid #eee;

  .header {
    margin-top: 10px;
    .title {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .content {
    padding: 5px;
  }
  .footer {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
    .more {
      font-weight: 500;
      color: var(--primary-color);
    }
  }
}


</style>
<template>
  <div class="section">
    <div class="header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <slot>
        <h2>默认内容</h2>
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
  border-top: 5px solid #ddd;
  .footer {
    display: flex;
    justify-content: flex-end;
    .more {
      // position: absolute;
      color: var(--primary-color);
    }
  }
}


</style>
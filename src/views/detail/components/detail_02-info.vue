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

    <div class="bar comment">
      <div class="left">
        <span class="overall">{{ topInfo.commentBrief.overall }}</span>
        <span class="score-title">{{ topInfo.commentBrief.scoreTitle }}</span>
        <span class="comment-brief">"{{ topInfo.commentBrief.commentBrief }}"</span>
      </div>
      <div class="right">
        <span>{{ topInfo.commentBrief.totalCount }}</span>条评论
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="bar position">
      <div class="left">
        {{ topInfo.nearByPosition.address }}
      </div>
      <div class="right">
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
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

  .bar {
    margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f4f5;
    padding: 10px;
    border-radius: 8px;

    .right {
      color: var(--primary-color);
    }
  }

  .comment {
    .left {
      .overall {
        font-size: 18px;
        font-weight: 500;
      }
      .score-title {
        margin-left: 4px;
        font-size: 13px;
        font-weight: 500;
      }
      .comment-brief {
        margin-left: 4px;
        font-size: 13px;
        color: #999;
      }
    }
  }

  .position {
    .left {
      font-weight: 500;
    }
  }
}

</style>
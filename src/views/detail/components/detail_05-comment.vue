<template>
  <div class="comment">
    <detail-section title="热门评论" :more-text="`查看全部${commentData.totalCountStr}条评论`">
      <div class="inner detail-section-inner">
        <div class="overall">
          <div class="left">
            <div class="score">{{ commentData.overall }}</div>
            <div class="underline"></div>
          </div>
          <div class="middle">
            <div class="title">{{ commentData.scoreTitle }}</div>
            <div class="number-text">{{ `${ commentData.totalCountStr }条评论` }}</div>
            <div class="rate">
              <van-rate
                :model-value="Number(commentData.overall)" 
                readonly allow-half
                color="#ff9854" void-color="#ff9854"
                size="12px"
            />
            </div>
          </div>
          <div class="right">
            <template v-for="(item,index) in commentData.subScoresFocus" :key="index">
              <span class="subscore">{{ item.text }}</span>
            </template>
          </div>
        </div>
          
        <div class="tagList">
          <template v-for="(item, index) in commentData.commentTagVo" :key="index">
            <span class="tag-item" :style="{color: item.color, backgoundColor: item.backgoundColor}">
              {{ item.text }}
            </span>
          </template>
        </div>

        <div class="user-comment">
          <div class="user-info">
            <img :src="commentData.comment.userAvatars" alt="">
            <div class="info">
              <div class="username">{{ commentData.comment.userName }}</div>
              <div class="date">{{ commentData.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="comment-detail">{{ commentData.comment.commentDetail }}</div>
        </div>
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
    display: flex;
    align-items: center;
    .left {
      display: flex;
      flex-direction: column;
      .score {
        font-size: 42px;
        font-weight: 700;
        letter-spacing: 1px;
      }
      .underline {
        height: 6px;
        width: 100%;
        border-radius: 5px;
        background-image: var(--theme-linear-gradient);
        position: relative;
        bottom: 7px;
      }
    }
    .middle {
      margin-left: 18px;
      display: flex;
      flex-direction: column;
      .title {
        color: #333;
        font-weight: 600;
      }
      .number-text {
        margin-top: 3px;
        color: #999;
      }
      .rate {
        margin-top: 2px;
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      color: #666;
      max-width: 205px;
      justify-content: end;
      font-size: 13px;
      .subscore {
        margin: 4px;
      }
    }
  }

  .tagList {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    .tag-item {
      padding: 3px;
      background-color: #f5f5f5;
      border-radius: 3px;
      margin: 4px 4px 2px;
      font-size: 13px;
    }
  }

  .user-comment {
    margin-top: 20px;
    .user-info {
      display: flex;
      align-items: center;
      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }
      .info {
        margin-left: 10px;
        .username {
          font-weight: 600;
        }
        .date {
          margin-top: 5px;
          color: #999;
        }
      }
    }
    .comment-detail {
      padding: 5px;
      margin-top: 12px;
      line-height: 1.35;
      color: #333;
    }
  }
}
</style>
<template>
  <div class="landload">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="inner detail-section-inner">
        <div class="top">
          <img :src="landlordData.topScroll" alt="">
        </div>

        <div class="tags">
          <div class="left">
            <div class="hotelLogo">
              <img :src="landlordData.hotelLogo" alt="">
            </div>
            <div class="hotelTags">
              <div class="name">{{ landlordData.hotelName }}</div>
              <div class="tagList">
                <template v-for="(item, index) in landlordData.hotelTags" :key="index">
                  <span :style="{color: item.tagText.color}" class="tagItem">
                    <span class="tagText">{{ item.tagText.text }}</span>
                    <span class="divider" v-if="index !== landlordData.hotelTags.length-1">|</span>
                  </span>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>

        <div class="summary">
          <template v-for="(item, index) in landlordData.hotelSummary" :key="index">
            <div class="summary-item">
              <div class="title">{{ item.title }}</div>
              <div class="brief">{{ item.introduction }}</div>
              <div class="tip">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';

const props = defineProps({
  landlordData: {
    type: Object,
    default: () => ({})
  }
});


</script>

<style lang="less" scoped>
.inner {

  .top {
    img {
      width: 100%;
    }
  }

  .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .left {
      display: flex;
      align-items: center;
      .hotelLogo {
        img {
          width: 54px;
          height: 54px;
        }
      }

      .hotelTags {
        margin-left: 3px;
        .name {
          font-weight: 600;
          font-size: 16px;
        }

        .tagList {
          margin-top: 3px;
          .tagItem {
            .divider {
              margin: 0 5px;
            }
          }
        }
      }
    }
    .right {
      .contact {
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        color: #fff;
        font-size: 12px;
        padding: 0 12px;
        letter-spacing: 1px;
        background-image: var(--theme-linear-gradient);
      }
    }
  }

  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 40px 10px 10px;
    .summary-item {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      .title {
        color: #999;
      }
      .brief {
        margin-top: 3px;
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }
      .tip {
        margin-top: 3px;
        color: #999;
      }
    }
  }
}

</style>
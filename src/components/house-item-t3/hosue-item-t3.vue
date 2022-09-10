<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/image/home/location.png" alt="">
          <span class="text">{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        
        <div class="price">
          <div class="new">￥{{ itemData.finalPrice }}</div>
          <div class="old">￥{{ itemData.productPrice }}</div>
          <div class="discount">
            {{ itemData?.priceTipBadge?.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, reactive} from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  },
});

// const startColor = computed(() => props.itemData.priceTipBadge.gradient.startColor);
// const endColor = computed(() => props.itemData.priceTipBadge.gradient.endColor);

// const discountStyle = reactive({
//   color: props.itemData.priceTipBadge?.color ?? '#fff',
//   backgroundImage: `linear-gradient(to right, ${startColor.value}, ${'#' + endColor.value})`
// });

</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  padding: 5px;
  // border: 1px solid #000;
  
  .item-inner {
    position: relative;
    overflow: hidden;

    .cover {
      img {
        border-radius: 10px;
        width: 100%;
      }
    }

    .info {
      padding: 8px 10px;
      color: #000;

      .location {
        img {
          width: 12px;
          height: 12px;
        }
        .text {
          margin-left: 5px;
          color: rgb(60, 60, 60);
        }
      }
      .summary {
        font-size: 12px;
      }
      .name {
        line-height: 1.2;
        margin: 8px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

    }

    .price {
      margin-top: 8px;
      display: flex;
      align-items: center;
      .new {
        color: #ff9645;
      }

      .old {
        margin-left: 5px;
        color: #999;
        text-decoration:line-through;
        font-size: 12px;
      }
      .discount {
        background-image: linear-gradient(to right, #FF6666,#FF9F9F);
        color: #fff;
        margin-left: 8px;
        font-size: 12px;
        padding: 1px 8px;
        border-radius: 10px;
      }
    }
  }
}

</style>
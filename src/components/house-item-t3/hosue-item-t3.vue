<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/image/home/location.png" alt="">
          <span class="text">{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        
        <div class="price">
          <div class="rate">
            <van-rate
              :model-value="Number(itemData.commentScore)" 
              readonly allow-half
              color="#fff" void-color="#fff"
              size="12px"
            />
          </div>
          <div class="new">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  },
})


</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  padding: 5px;
  border: 1px solid #000;
  
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
          color: grey;
        }
      } 
      .summary {
        font-size: 12px;
      }
      .name {
        margin: 8px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        justify-content: space-between;
        .rate {

        }
      }
    }
  }
}

</style>
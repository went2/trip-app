<template>
  <div class="detail-swipe">
    <van-swipe class="list" :autoplay="3000">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span
              class="item"
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
            >
              <span class="text">{{ formatTitle(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
});

/**
 * 处理数据
 * result: swipeGroup: { "2": [obj1, obj2], "4": [obj3, obj4] }
 */
const swipeGroup = {};
for(const item of props.swipeData) {
  let groupValue = swipeGroup[item.enumPictureCategory];
  if(!groupValue) {
    swipeGroup[item.enumPictureCategory] = [];
  }
  swipeGroup[item.enumPictureCategory].push(item);
}

const titleReg = /【(.*?)】/i;
const formatTitle = (title) => {
  const result = titleReg.exec(title);
  return result[1];
}

const getCategoryIndex = (activeItem) => {
  // find target array in swipeGroup
  const valueArr = swipeGroup[activeItem.enumPictureCategory];

  // find index of target object
  const index = valueArr.findIndex(item => item === activeItem);
  return index + 1;
}

</script>

<style lang="less" scoped>
.detail-swipe {
  .list {
    img {
      width: 100%;
    }

    .indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 4px 8px;
        border-radius: 12px;
        display: flex;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, 0.8);

        .item {
          margin: 0 4px;
          &.active {
            padding: 0px 4px;
            background-color: #fff;
            border-radius: 6px;
            color: #555;
          }
          .count {
            margin-left: 3px;
          }
        }
      }
  }
}
</style>
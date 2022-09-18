<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="inner detail-section-inner">
        <template v-for="(item, index) in facilityData.houseFacilitys" :key="index">
          <div class="item" v-if="facilityData.facilitySort.includes(index)">
            <div class="left">
              <img :src="item.icon" alt="">
              <span class="name">{{ item.groupName }}</span>
            </div>
            <div class="right">
              <template v-for="(item2, index2) in item.facilitys.slice(0,4)" :key="index2">
                <div class="small-item">
                  <i class="icon_check icon"></i>
                  <span>{{ item2.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"

defineProps({
  facilityData: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.inner {

  .item {
    display: flex;
    padding: 8px 15px;
    .left {
      // border: 1px solid #222;
      width: 75px;
      text-align: center;
      display: flex;
      flex-direction: column;
      img {
        width: 24px;
        margin: 0 auto;
      }
      .name {
        margin-top: 5px;
        text-align: center;
        font-size: 12px;
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      .small-item {
        width: 50%;
        padding: 4px;
        align-items: center;

        span {
          margin-left: 5px;
          color: #333;
        }
      }
    }
  }
}
</style>
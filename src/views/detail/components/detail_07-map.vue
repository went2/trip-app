<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="inner detail-section-inner" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import DetailSection from '@/components/detail-section/detail-section.vue';

const props = defineProps({
  mapData: {
    type: Object,
    default: () => ({})
  }
});

// 集成百度地图
const mapRef = ref();
onMounted(() => {
  const map = new BMap.Map(mapRef.value);
  const point = new BMap.Point(props.mapData.longitude, props.mapData.latitude); 
  const marker = new BMap.Marker(point);

  map.enableScrollWheelZoom(true); 
  map.centerAndZoom(point, 12);
  map.addOverlay(marker);
});

</script>

<style lang="less" scoped>

.inner {
  height: 250px;
}
</style>
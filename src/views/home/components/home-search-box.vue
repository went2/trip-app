<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="clickCity">北京</div>
      <div class="my-position" @click="clickPosition">
        <span class="text">我的位置</span>
        <img src="@/assets/image/home/icon_location.png" alt="location-image">
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const clickPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
    console.log(res);
    },
    (err) => {
      console.error('获取位置失败', err)
    }
  )
}

const clickCity = () => {
  router.push('/city');
}

</script>

<style lang="less" scoped>
.location {
  display: flex;
  padding: 0 20px;
  align-items: center;
  height: 44px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }
  
  .my-position {
    .text {
      font-size: 13px;
      position: relative;
      bottom: 3px;
      color: #666;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>
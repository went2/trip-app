import { ref } from 'vue';
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import { throttle } from 'underscore';

export default function useScorll(ele) {
  // let ele;
  const isBottom = ref(false);
  const scrollTop = ref(0); // 已滚动
  const clientHeighgt = ref(0);  // 元素高，固定
  const scrollHeight = ref(0);  // 可滚动高(内容高度)，固定

  const scrollCallBack = throttle(() => {
    if(ele) {
      scrollHeight.value = ele.value.scrollHeight;
      clientHeighgt.value = ele.value.clientHeight; 
      scrollTop.value = ele.value.scrollTop;
    } else {
      scrollHeight.value = document.documentElement.scrollHeight;
      clientHeighgt.value = document.documentElement.clientHeight; 
      scrollTop.value = document.documentElement.scrollTop;
    }
    // console.log(scrollTop.value)
    if(clientHeighgt.value + scrollTop.value + 20 >= scrollHeight.value) {
      console.log('滚到底部');
      isBottom.value = true;
    }
  }, 300);
  
  onMounted(() => {
    if(ele) {
      // console.log('传入ele',ele);
      ele.value.addEventListener('scroll', scrollCallBack);
    } else {
      window.addEventListener('scroll', scrollCallBack);
    }
  });
  
  onActivated(() => {
    if(ele) {
      ele.value.addEventListener('scroll', scrollCallBack);
    } else {
      window.addEventListener('scroll', scrollCallBack);
    }
  });
  
  onDeactivated(() => {
    if(ele) {
      ele.value.removeEventListener('scroll', scrollCallBack);
    } else {
      window.removeEventListener('scroll', scrollCallBack);
    }
  });
  
  onUnmounted(() => {
    if(ele) {
      ele.value.removeEventListener('scroll', scrollCallBack);
    } else {
      window.removeEventListener('scroll', scrollCallBack);
    }
  });

  return { isBottom, scrollTop, clientHeighgt, scrollHeight };
}
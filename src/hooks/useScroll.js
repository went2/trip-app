import { ref } from 'vue';
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import { throttle } from 'underscore';

export default function useScorll() {
  const isBottom = ref(false);
  const scrollTop = ref(0); // 已滚动
  const clientHeighgt = ref(0);  // 设备高
  const scrollHeight = ref(0);  // 可滚动

  const scrollCallBack = throttle(() => {
    scrollHeight.value = document.documentElement.scrollHeight;
    clientHeighgt.value = document.documentElement.clientHeight; 
    scrollTop.value = document.documentElement.scrollTop;
  
    if(clientHeighgt.value + scrollTop.value + 20 >= scrollHeight.value) {
      console.log('滚到底部');
      isBottom.value = true;
    }
  }, 300);
  
  onMounted(() => {
    window.addEventListener('scroll', scrollCallBack);
  });
  
  onActivated(() => {
    window.addEventListener('scroll', scrollCallBack);
  });
  
  onDeactivated(() => {
    window.removeEventListener('scroll', scrollCallBack);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollCallBack);
  });

  return { isBottom, scrollTop, clientHeighgt, scrollHeight };
}
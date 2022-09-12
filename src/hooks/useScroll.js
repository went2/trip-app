import { ref } from 'vue';
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import { throttle } from 'underscore';

export default function useScorll() {
  const isBottom = ref(false);

  const scrollCallBack = throttle(() => {
    const scrollHeight = document.documentElement.scrollHeight; // 可滚动
    const clientHeighgt = document.documentElement.clientHeight; // 设备高
    const scrollTop = document.documentElement.scrollTop; // 已滚动
  
    if(clientHeighgt + scrollTop + 20 >= scrollHeight) {
      console.log('滚到底部');
      isBottom.value = true;
    }
  }, 100);
  
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

  return { isBottom }
}
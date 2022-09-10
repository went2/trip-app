import { ref } from 'vue';
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import { throttle } from '@/utils/throttle';

export default function useScorll() {
  const isBottom = ref(false);

  const scrollCallBack = () => {
    const scrollHeight = document.documentElement.scrollHeight; // 可滚动
    const clientHeighgt = document.documentElement.clientHeight; // 设备高
    const scrollTop = document.documentElement.scrollTop; // 已滚动
  
    if(clientHeighgt + scrollTop + 20 >= scrollHeight) {
      console.log('滚到底部');
      isBottom.value = true;
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', throttle(scrollCallBack));
  });
  
  onActivated(() => {
    window.addEventListener('scroll', throttle(scrollCallBack));
  });
  
  onDeactivated(() => {
    window.removeEventListener('scroll', throttle(scrollCallBack));
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', throttle(scrollCallBack));
  });

  return { isBottom }
}
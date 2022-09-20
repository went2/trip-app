import { ref } from 'vue';
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import { throttle } from 'underscore';

export default function useScorll(elRef) {
  let el = window;
  const isBottom = ref(false);
  const scrollTop = ref(0); // 已滚动
  const clientHeighgt = ref(0);  // 元素高，固定
  const scrollHeight = ref(0);  // 可滚动高(内容高度)，固定

  const scrollCallBack = throttle(() => {
    if(el === window) {
      scrollHeight.value = document.documentElement.scrollHeight;
      clientHeighgt.value = document.documentElement.clientHeight; 
      scrollTop.value = document.documentElement.scrollTop;
    } else {
      scrollHeight.value = el.scrollHeight;
      clientHeighgt.value = el.clientHeight; 
      scrollTop.value = el.scrollTop;
    }
    // console.log(scrollTop.value)
    if(clientHeighgt.value + scrollTop.value + 20 >= scrollHeight.value) {
      console.log('滚到底部');
      isBottom.value = true;
    }
  }, 300);
  
  onMounted(() => {
    if(elRef) el = elRef.value;
    el.addEventListener('scroll', scrollCallBack);
  });
  
  onActivated(() => {
    if(elRef) el = elRef.value;
    el.addEventListener('scroll', scrollCallBack);
  });
  
  onDeactivated(() => {
    el.removeEventListener('scroll', scrollCallBack);
  });
  
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollCallBack);
  });

  return { isBottom, scrollTop, clientHeighgt, scrollHeight };
}
// 节流函数
export const throttle = (cb, delay=300) => {
  let t = null;
  return function () {
    if(t) return;
    t = setTimeout(() => {
      cb.call(this);
      t = null;
    }, delay)
  }
}
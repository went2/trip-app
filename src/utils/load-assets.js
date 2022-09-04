// 动态获取资源路径
export const getAssetURL = (path) => {
  // 参数一：相对路径，目标文件相对文件的路径
  // 参数二：当前文件路径
  return new URL(`../assets/${path}`, import.meta.url).href;
}


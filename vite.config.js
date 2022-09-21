import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       postcsspxtoviewport({
  //         viewportWidth: 375,  // UI设计稿的宽度
  //         unitToConvert: 'px', // 要转化的单位
  //         unitPrecision: 6, // 转换后的精度，即小数点位数
  //         propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  //         viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  //         fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  //       }),
  //     ]
  //   }
  // }
})

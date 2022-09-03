import { createApp } from 'vue';
import App from './App.vue';

import 'normalize.css';
import './assets/css/index.css';

import pinia from './store/index';
import router from './router/index';

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');

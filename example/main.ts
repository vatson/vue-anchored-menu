/// <reference path="../types/vue-router.d.ts" />
/// <reference path="./shims.d.ts" />

import { AnchoredMenuPlugin } from '../src/main';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(AnchoredMenuPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

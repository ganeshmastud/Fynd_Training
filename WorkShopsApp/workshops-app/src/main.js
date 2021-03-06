import Vue from 'vue'
import App from './App.vue'

import './init';

import router from '@/router';

Vue.config.productionTip = false

new Vue({
  router,
  render: renderer => renderer(App),
}).$mount('#app')

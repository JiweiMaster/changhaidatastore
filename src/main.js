import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

import router from './routes'

Vue.use(Vant);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

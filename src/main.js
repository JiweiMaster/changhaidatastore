import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
import routes from './routes'

Vue.use(Vant);

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

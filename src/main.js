import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import store from './store/store.js'

Vue.config.productionTip = false
Vue.use(VueRouter);
import { routes } from './routes';
const router = new VueRouter ({
  mode: 'history',
  routes

})
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

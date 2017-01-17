import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use( VueRouter )
Vue.use( VueResource )

import App from './App.vue'
import Routes from './routes'
import Store from './vuex/store'

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: Store
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

require('./directives/actives.js')
require('./plugins/actives.js')

Vue.use( VueRouter )
Vue.use( VueResource )

import App from './App.vue'
import Routes from './routes'
import Store from './vuex/store'

const router = new VueRouter({
  routes: Routes,
  history: true
})

sync(store, router)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: Store
})

Vue.myGlobalMethod();

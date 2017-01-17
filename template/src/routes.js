import Example from './components/Example.vue'
import Resource from './components/Resource.vue'
import Vuex from './components/Vuex.vue'

const Routes = [
  { path: '/'             , component: Example },
  { path: '/resource'     , component: Resource },
  { path: '/vuex'         , component: Vuex }
]

export default Routes;

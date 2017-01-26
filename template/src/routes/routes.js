import Example from './../components/Example.vue'
import Resource from './../components/Resource.vue'
import Vuex from './../components/Vuex.vue'

export default [
  { path: '/'             , component: Example			, meta: {permission: 'admin.any'} },
  { path: '/resource'     , component: Resource 		, meta: {permission: 'admin.any'} },
  { path: '/vuex'         , component: Vuex 			, meta: {permission: 'admin'} }
]

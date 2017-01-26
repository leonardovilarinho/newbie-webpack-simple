import Vue from 'vue'
import Router from './../routes/router'
import Store from './../vuex/store'

import Acl from 'vue-acl'
Vue.use( Acl, {router: Router, d_permission: 'any', store: Store} )

import MultiLanguage from 'vue-multilanguage'
Vue.use( MultiLanguage, {path: 'languages', d_language: 'pt', store: Store} )
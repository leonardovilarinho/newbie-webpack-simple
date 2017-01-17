import Vue from 'vue'

Vue.directive('example', {
  inserted: function (el, binding, vnode, oldvnode) {
    el.style.color = '#1ca2f4'
  }
})

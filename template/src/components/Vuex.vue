<template>
  <div>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <p v-text='count'></p>
  </div>
</template>

<script>

import store from '../vuex/store'

export default {
	name: "Vuex",

  computed: {
    count () {
      return store.state.count
    }
  },

	data() {
		return {
		}
	},

	methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
	}
}
</script>

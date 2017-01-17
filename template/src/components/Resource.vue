<template>
  <div>
    <button @click='getJSON'>Get data from example/json.json</button>

    <p v-text='message'></p>
  </div>
</template>

<script>

export default {
	name: "Resource",
	data(){
		return {
			message: ''
		}
	},

	methods: {
		getJSON(){
      this.$http.get('/example/json.json').then(
      (response) => {
        this.message = response.data.msg
      },
      (error) => {
       console.error(error.statusText)
      })
		}
	}
}
</script>

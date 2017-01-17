<template>
  <div>
    <h2 v-text='foo'></h2>
  </div>
</template>

<script>

export default {
	name: "Example",
	data(){
		return {
      foo: "bar"
		}
	},

	created(){
		//On Component created
	},

	methods: {
		functionExample(){
      //Basic Component method
		}
	}
}
</script>

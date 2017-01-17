<template>
  <div>
    <p v-text='foo' v-example></p>
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

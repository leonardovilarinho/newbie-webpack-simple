<template>
  <div>
    <p v-text='l("foo")' v-example></p>

    <button @click="toggleL('pt')">PT</button>
    <button @click="toggleL('en')">EN</button>

	<p>Trocar permissão ativa</p>
    <button @click="toggleR('any')" :disabled="!admin">Any</button>
    <button @click="toggleR('admin')" :disabled="admin">Admin</button>
	
	<p v-show="can('admin')">Admin está ativo</p>
	<p v-show="can('admin.any')">Qualquer um está ativo</p>

  </div>
</template>

<script>

export default {
	name: "Example",
	data() {
		return { admin: false }
	},
	methods: {
		toggleL(l){
			console.log(l)
      		this.changeLanguage(l)
		},
		toggleR(r){
			if(r == 'admin')
				this.admin = true
			else
				this.admin = false
			this.changeAccess(r)
		}
	}
}
</script>

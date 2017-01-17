<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{name}} - v.{{version}}</h1>
    <hr>
    <p>
      <router-link to='/'>Router test</router-link> |
      <router-link to='/resource'>Resource test</router-link> |
      <router-link to='/vuex'>Vuex test</router-link>
    </p>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

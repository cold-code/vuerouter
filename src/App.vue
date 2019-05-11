<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">home</router-link> | 
      <router-link to="/params/627/I am learning Vue">params</router-link> 
      <router-view/>
    </p>
    <router-view name="left" style="float:left;width:50%;background:#ccc"/>
    <router-view name="right" style="float:right;width:50%;background:#01b2b6"/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>

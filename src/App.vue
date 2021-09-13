<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <data-manage></data-manage>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import DataManage from './components/DataManage/DataManage.vue'

  export default {
    name: 'App',
    components: {
      //HelloWorld,
      DataManage
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

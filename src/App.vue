<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <data-manage></data-manage>
    <!-- <data-entry></data-entry> -->
  </div>
</template>

<script>
  // import DataEntry from './components/DataEntry/DataEntry.vue'
  // import HelloWorld from './components/HelloWorld.vue'
  import DataManage from './components/DataManage/DataManage.vue'

  export default {
    name: 'App',
    components: {
      //HelloWorld,
      DataManage
      // DataEntry
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

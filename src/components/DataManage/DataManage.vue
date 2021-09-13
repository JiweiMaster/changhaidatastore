<template>
  <div class="dataManage">
    <van-nav-bar class="title" title="病例数据录入" fixed></van-nav-bar>
    <change-state></change-state>
  </div>
</template>

<script>
  import ChangeState from './com/Change.vue'
  export default {
    name: 'DataManage',
    components: {
      ChangeState
    }
  }
</script>

<style scoped>
  .title {
    background-color: rgb(231, 180, 180);
  }
</style>
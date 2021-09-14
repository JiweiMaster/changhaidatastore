<template>
  <div class="dataManage">
    <van-nav-bar title="病例数据录入" fixed></van-nav-bar>
    <van-divider />
    <data-item></data-item>
    <change-state></change-state>
  </div>
</template>

<script>
  import ChangeState from './com/ChangeState.vue'
  import DataItem from './com/DataItem.vue'
  export default {
    name: 'DataManage',
    components: {
      ChangeState,
      DataItem
    }
  }
</script>

<style scoped>
  .van-nav-bar {
    background-color: rgb(72, 157, 236) !important;
  }
  .van-nav-bar__title {
    color: white !important;
  }
</style>
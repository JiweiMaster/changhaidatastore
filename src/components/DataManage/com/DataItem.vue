<template>
  <div class="dataManage">
    <p class="patInfo">测试文本</p>
    <van-button type="primary"></van-button>
    <van-button type="primary"></van-button>
  </div>
</template>

<script>
  export default {
    name: 'DataItem'
  }
</script>

<style scoped>
  .dataManage {
    display: flex;
    justify-content: space-around;
  }
  .patInfo {
    font-weight: 500;
    width: 30vw;
  }
</style>
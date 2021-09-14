<template>
  <div class="changeState">
    <van-tabbar v-model="active" active-color="blue" inactive-color="#000">
      <van-tabbar-item>新建</van-tabbar-item>
      <van-tabbar-item>编辑中</van-tabbar-item>
      <van-tabbar-item>已上传</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'ChangeState',
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style scoped>
</style>
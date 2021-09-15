<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="基本">内容 1</van-tab>
      <van-tab title="化验">内容 2</van-tab>
      <van-tab title="影像">内容 3</van-tab>
      <van-tab title="手术">内容 4</van-tab>
      <van-tab title="病理">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "BaseInfo.vue",
  data() {
    return {
      active: 2
    }
  }
}
</script>

<style scoped>

</style>
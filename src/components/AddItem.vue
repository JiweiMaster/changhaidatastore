<template>
  <div style="margin-top: 75vh; margin-left: 70vw">
    <van-button
      round
      type="info"
      width="3rem"
      height="3rem"
      icon="edit"
      style=" border-radius:99px"
      v-on:click="newData()"
    ></van-button>
  </div>
</template>

<script>
  export default {
    name: 'AddItem',
    methods: {
      newData() {
        this.$router.push('/BaseInfo')
      }
    }
  }
</script>

<style scoped>
  .van-button {
    padding: 0 13px !important;
    font-size: 14px !important;
  }
  .div.van-button--round {
    border-radius: 30px !important;
  }
  .van-button--info {
    background-color: #913935 !important;
    border: 1px solid #913935 !important;
  }
</style>
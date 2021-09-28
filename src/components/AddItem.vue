<template>
  <div style="margin-top: 60vh; margin-left: 70vw">
    <van-button
      round
      type="info"
      width="3rem"
      height="3rem"
      icon="edit"
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

<style>
  .van-button {
    padding: 0 13px !important;
    font-size: 14px !important;
  }
  .van-button--round {
    border-radius: 99px !important;
  }
  .van-button--info {
    background-color: #913935 !important;
    border: 1px solid #913935 !important;
  }
</style>
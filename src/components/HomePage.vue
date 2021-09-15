<template>
  <div class="home-page">
    <h1>胰腺病例录入系统</h1>
    <van-button
      class="btn"
      type="info"
      text="进入系统"
      v-on:click="enterSys()"
    ></van-button>
    <img src="../assets/foot.png" alt="" />
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    components: {},
    data() {
      return {}
    },
    methods: {
      enterSys() {
        this.$root.currentRoute = '/DataManage'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-page {
    margin-top: 10vh;
    text-align: center;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    color: rgb(7, 60, 110);
  }
  h1 {
    background-color: #3ee7d0;
  }
  .van-button--info {
    margin: 5vh auto;
    background-color: #913935 !important;
    border: 1px solid #913935 !important;
  }
  img {
    margin: 45vh auto;
    width: 90vw;
    bottom: 0;
  }
</style>

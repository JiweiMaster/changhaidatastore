<template>
  <div class="firstPage">
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar> -->
    <h1>胰腺病例录入系统</h1>
    <van-button class="btn" plain type="info" text="进入系统"></van-button>
    <img src="../assets/foot.png" alt="" />
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    components: {},
    props: {
      msg: String
    },
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .firstPage {
    margin-top: 10vh;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    color: rgb(7, 60, 110);
  }
  .btn {
    margin: 10vh auto;
    font-weight: 600;
    color: black;
  }
  img {
    margin: 40vh auto;
    width: 90vw;
    bottom: 0;
  }
  /* h3 {
                        margin: 40px 0 0;
                      }
                      ul {
                        list-style-type: none;
                        padding: 0;
                      }
                      li {
                        display: inline-block;
                        margin: 0 10px;
                      }
                      a {
                        color: #42b983;
                      } */
</style>

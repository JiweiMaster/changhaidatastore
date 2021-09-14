<template>
  <div class="first-page">
    <h1>胰腺病例录入系统</h1>
    <Button class="btn" color="primary" elevation="2" outlined>
      进入系统
    </Button>
    <img src="../assets/foot.png" alt="" />
  </div>
</template>

<script>
  import Button from 'vant/lib/button'
  export default {
    name: 'FirstPage',
    components: {
      Button
    }
  }
</script>

<style scoped>
  .first-page {
    margin-top: 10vh;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    color: rgb(7, 60, 110);
  }
  .btn {
    margin: 10vh auto;
    font-weight: 800;
  }
  img {
    margin: 40vh auto;
    width: 90vw;
    bottom: 0;
  }
</style>
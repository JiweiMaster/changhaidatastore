<template>
  <div>
    <div class="data-item">
      <p>住院号：{{ info.id }}</p>
      <p>姓名：{{ info.name }}</p>
      <p>性别：{{ info.sex }}</p>
      <p>年龄：{{ info.age }}</p>
      <p>病理信息：{{ info.pathological }}</p>
    </div>
    <van-button
      class="btn"
      type="primary"
      size="small"
      v-if="this.info.upload == false"
      >编辑</van-button
    >
    <van-button
      class="btn"
      type="primary"
      size="small"
      v-if="this.info.upload == false"
      >上传</van-button
    >
    <van-divider />
  </div>
</template>

<script>
  export default {
    name: 'DataItem',
    props: {
      info: Object
    }
  }
</script>

<style scoped>
  .data-item {
    display: flex;
    justify-content: center;
    width: 90vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  p {
    font-size: 0.5em;
    margin: 5px;
  }
  .btn {
    margin: 5vw;
  }
</style>
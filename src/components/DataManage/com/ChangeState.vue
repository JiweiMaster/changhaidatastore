<template>
  <div class="change-state">
    <van-tabbar v-model="active" active-color="blue" inactive-color="#000">
      <van-tabbar-item name="new" @click="clickNew">新建</van-tabbar-item>
      <van-tabbar-item name="editing" @click="clickEditing"
        >编辑中</van-tabbar-item
      >
      <van-tabbar-item name="uploaded" @click="clickUploaded"
        >已上传</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'ChangeState',
    data() {
      return {
        active: 'new'
      }
    },
    methods: {
      clickNew() {
        this.$emit('change', this.active)
      },
      clickEditing() {
        this.$emit('change', this.active)
      },
      clickUploaded() {
        this.$emit('change', this.active)
      }
    }
  }
</script>

<style scoped>
</style>
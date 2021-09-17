<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="基本">
        <BaseComponent />
      </van-tab>
      <van-tab title="化验">
        <huayan />
      </van-tab>
      <van-tab title="影像"><ImagesComponent /></van-tab>
      <van-tab title="手术">内容 4</van-tab>
      <van-tab title="病理">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import BaseComponent from './BaseComponent'
  import huayan from './huayan'
  import ImagesComponent from './ImagesComponent'
  export default {
    name: 'BaseInfo.vue',
    components: {
      BaseComponent,
      huayan,
      ImagesComponent
    },
    data() {
      return {
        active: 0,
        value1: 123,
        hospitalNum: '320882',
        patientName: '',
        patientAge: '',
        patientGender: 1
      }
    }
  }
</script>

<style>
  .input_div {
    margin-top: 5px;
    width: 300px;
    height: 30px;
    border-radius: 4px;
    border: solid 1px lightgray;
    padding-left: 10px;
  }
  .van-button--round {
    border-radius: 30px !important;
  }

  .van-button {
    height: 44px !important;
  }
  /*.van-tabs__nav{*/
  /*  background-color: #fff;*/
  /*}*/
  .van-radio__icon--checked .van-icon {
    background-color: #913935;
    border-color: #913935;
  }

  .van-tabs__line {
    background-color: #fff !important;
  }

  .van-tabs__nav {
    background-color: #913935 !important;
  }

  .van-tab {
    color: #fff;
  }
</style>
<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="基本">
        <div style="margin-left: 10px; margin-right: 10px; margin-top: 30px">
          <div>住院号*:</div>
          <div>
            <van-field
                v-model="value1"
                placeholder="显示图标"
            />
          </div>
        </div>
      </van-tab>
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
      active: 2,
      value1: 123
    }
  }
}
</script>

<style>

/*.van-tabs__nav{*/
/*  background-color: #fff;*/
/*}*/

.van-tabs__line{
  background-color: #fff
}

.van-tabs__nav{
  background-color: #913935 !important;
}

.van-tab{
  color: #fff;
}

</style>
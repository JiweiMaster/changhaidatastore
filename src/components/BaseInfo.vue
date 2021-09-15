<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="基本">
        <div style="margin-left: 10px; margin-right: 10px; margin-top: 30px">
          <!--     住院号     -->
          <div style="margin-top: 15px">
            <div>住院号*:</div>
            <div>
              <input class="input_div"  v-text="hospitalNum"/>
            </div>
          </div>
          <!--     患者姓名     -->
          <div style="margin-top: 15px">
            <div>患者姓名*:</div>
            <div>
              <input class="input_div"  v-text="patientName"/>
            </div>
          </div>
          <!--     患者年龄     -->
          <div style="margin-top: 15px">
            <div>患者年龄*:</div>
            <div>
              <input class="input_div"  v-text="patientAge"/>
            </div>
          </div>
<!--          性别-->
          <div style="margin-top: 15px">
            <div>患者年龄*:</div>
            <div style="margin-top: 10px">
              <van-radio-group v-model="patientGender">
                <van-radio name="1" shape="square" style="float: left; margin-right: 10px">男</van-radio>
                <van-radio name="2" shape="square" style="margin-left: 15px">女</van-radio>
              </van-radio-group>
            </div>
          </div>
<!--          提交的按钮-->
          <div style="margin-top: 50px; margin-left: 30px">
            <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">取消</van-button>
            <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">保存</van-button>
            <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">上传</van-button>
            <div></div>
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
      active: 0,
      value1: 123,
      hospitalNum: '320882',
      patientName: '',
      patientAge: '',
      patientGender:1
    }
  }
}
</script>

<style>
.input_div{
  margin-top: 5px;
  width: 300px;
  height: 30px;
  border-radius: 4px;
  border: solid 1px lightgray;
  padding-left: 10px;
}
.van-button--round{
  border-radius: 30px !important;
}

.van-button{
  height: 44px !important;
}
/*.van-tabs__nav{*/
/*  background-color: #fff;*/
/*}*/
.van-radio__icon--checked .van-icon{
  background-color: #913935;
  border-color: #913935;
}

.van-tabs__line{
  background-color: #fff !important;
}

.van-tabs__nav{
  background-color: #913935 !important;
}

.van-tab{
  color: #fff;
}

</style>
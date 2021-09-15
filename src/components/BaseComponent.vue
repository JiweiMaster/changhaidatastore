<template>
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
</template>

<script>
export default {
  name: "BaseComponent.vue"
}
</script>

<style scoped>

</style>
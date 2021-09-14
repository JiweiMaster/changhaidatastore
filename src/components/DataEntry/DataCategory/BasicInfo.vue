<template>
  <div class="basic-info">
    <van-form validate-first>
      <van-field
        v-model="value1"
        name="pattern"
        label="住院号"
        colon
        :rules="[{ required: true, pattern, message: '请输入住院号' }]"
      />
      <van-field
        v-model="name"
        name="name"
        label="患者姓名"
        colon
        show-error
        :rules="[{ required: true, message: '请输入患者姓名' }]"
      />
      <van-field
        v-model="age"
        name="age"
        label="患者年龄"
        colon
        show-error
        :rules="[{ required: true, message: '请输入患者年龄' }]"
      />
      <van-field name="sex" label="性别">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="foot-button" style="margin: 16px">
        <van-button round type="info" native-type="reset">取消</van-button>
        <van-button round type="info" native-type="submit" @click="saveInfo"
          >保存</van-button
        >
        <van-button round type="info" native-type="submit" @click="uploadInfo"
          >上传</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
  export default {
    name: 'DataItem',
    data() {
      return {
        value1: '',
        name: '',
        age: '',
        pattern: /\d{6}/,
        radio: '1'
      }
    },
    methods: {
      saveInfo() {},
      uploadInfo() {}
    }
  }
</script>

<style scoped>
  .basic-info {
    display: flex;
    justify-content: center;
  }
  .foot-button {
    display: flex;
    justify-content: space-between;
  }
</style>
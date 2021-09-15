<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="基本">
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
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <div class="footButton" style="margin: 16px">
          <van-button round type="info" native-type="submit">取消</van-button>
          <van-button round type="info" native-type="submit">保存</van-button>
          <van-button round type="info" native-type="submit">上传</van-button>
        </div>
      </van-tab>
      <van-tab title="化验">
        <van-cell-group>
            <van-field v-model="value21" label="白细胞计数 (WBC) [*10^9/L]" placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value22" label="中性粒细胞百分比 (NEU%) [%] " placeholder="数据类型：实数，保留1位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value23" label="淋巴细胞百分比 (LYM%) [%] " placeholder="数据类型：实数，保留1位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value24" label="血红蛋白 (Hb) [g/L]" placeholder="数据类型：大于0的正整数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value25" label="血小板计数 (PLT) [*10^9/L] " placeholder="数据类型：大于0的整数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value26" label="总胆红素 (TBIL) [umol/L]  " placeholder="数据类型：实数，保留1位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value27" label="白蛋白 (ALB) [g/L]  " placeholder="数据类型：大于0的正整数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value28" label="空腹血糖 (FBG) [mmol/L]" placeholder="数据类型：实数，保留1位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value29" label="HbA1c [%]" placeholder="数据类型：实数，保留1位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value210" label="肌酐 (CRE) [umol/L] " placeholder="数据类型：大于0的正整数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value211" label="胆固醇 (CHOL) [mmol/L]  " placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value212" label="甘油三酯 (TG) [mmol/L] " placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value213" label="甲胎蛋白 (AFP) [ng/mL]  " placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value214" label="癌胚抗原 (CEA) [ng/mL] " placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value215" label="糖类抗原19-9(CA19-9) [U/mL]" placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value216" label="糖类抗原 125 (CA125) [U/mL] " placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value217" label="糖类抗原 7-24 (CA724) [U/mL]" placeholder="数据类型：实数，保留2位小数" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value218" label="免疫球蛋白G4 (IgG4) [g/L] " placeholder="数据类型：实数，保留3位小数" />
        </van-cell-group>
        <div class="footButton" style="margin: 16px">
          <van-button round type="info" native-type="submit">取消</van-button>
          <van-button round type="info" native-type="submit">保存</van-button>
          <van-button round type="info" native-type="submit">上传</van-button>
        </div>
      </van-tab>
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
            value1: '',
            name: '',
            age: '',
            pattern: /\d{6}/,
            radio: '1',
            value21:'',
            value22:'',
            value23:'',
            value24:'',
            value25:'',
            value26:'',
            value27:'',
            value28:'',
            value29:'',
            value210:'',
            value211:'',
            value212:'',
            value213:'',
            value214:'',
            value215:'',
            value216:'',
            value217:'',
            value218:''
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

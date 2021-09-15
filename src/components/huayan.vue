<template>
  <div>
    <div>
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
    </div>
    <!--          提交的按钮-->
    <div style="margin-top: 50px; margin-left: 30px; margin-bottom: 30px">
      <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">取消</van-button>
      <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">保存</van-button>
      <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">上传</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "huayan.vue"
}
</script>

<style scoped>

</style>
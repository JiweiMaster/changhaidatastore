<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="analysis.value01"
          label="白细胞计数 (WBC) [*10^9/L]"
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value02"
          label="中性粒细胞百分比 (NEU%) [%] "
          placeholder="实数，保留1位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value03"
          label="淋巴细胞百分比 (LYM%) [%] "
          placeholder="实数，保留1位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value04"
          label="血红蛋白 (Hb) [g/L]"
          placeholder="大于0的正整数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value05"
          label="血小板计数 (PLT) [*10^9/L] "
          placeholder="大于0的整数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value06"
          label="总胆红素 (TBIL) [umol/L]  "
          placeholder="实数，保留1位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value07"
          label="白蛋白 (ALB) [g/L]  "
          placeholder="大于0的正整数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value08"
          label="空腹血糖 (FBG) [mmol/L]"
          placeholder="实数，保留1位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value09"
          label="HbA1c [%]"
          placeholder="实数，保留1位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value10"
          label="肌酐 (CRE) [umol/L] "
          placeholder="大于0的正整数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value11"
          label="胆固醇 (CHOL) [mmol/L]  "
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value12"
          label="甘油三酯 (TG) [mmol/L] "
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value13"
          label="甲胎蛋白 (AFP) [ng/mL]  "
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value14"
          label="癌胚抗原 (CEA) [ng/mL] "
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value15"
          label="糖类抗原19-9(CA19-9) [U/mL]"
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value16"
          label="糖类抗原 125 (CA125) [U/mL] "
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value17"
          label="糖类抗原 7-24 (CA724) [U/mL]"
          placeholder="实数，保留2位小数"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value18"
          label="免疫球蛋白G4 (IgG4) [g/L] "
          placeholder="实数，保留3位小数"
        />
      </van-cell-group>
    </div>
    <!--          提交的按钮-->
    <div style="display: flex; justify-content: center; margin-top: 50px">
      <van-button round type="info" style="width: 80px" v-on:click="cancelBtn()"
        >取消</van-button
      >
      <van-button
        round
        type="info"
        style="margin: auto 20px; width: 80px"
        v-on:click="saveBtn()"
        >保存</van-button
      >
      <van-button round type="info" style="width: 80px" v-on:click="uploadBtn()"
        >上传</van-button
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AnalysisComponent.vue',
    data() {
      return {
        analysis: {
          value01: '',
          value02: '',
          value03: '',
          value04: '',
          value05: '',
          value06: '',
          value07: '',
          value08: '',
          value09: '',
          value10: '',
          value11: '',
          value12: '',
          value13: '',
          value14: '',
          value15: '',
          value16: '',
          value17: '',
          value18: ''
        }
      }
    },
    methods: {
      cancelBtn() {
        this.$root.currentRoute = '/DataManage'
      },
      saveBtn() {
        this.$emit('saveAnalysis', this.analysis)
      },
      uploadBtn() {}
    }
  }
</script>

<style>
  .van-field__label {
    width: 14em !important;
  }
</style>
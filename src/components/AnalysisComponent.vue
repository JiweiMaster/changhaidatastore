<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="analysis.value01"
          label="白细胞计数 (WBC) [*10^9/L]"
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value01 = analysis.value01
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value02"
          label="中性粒细胞百分比 (NEU%) [%] "
          placeholder="实数，保留1位小数"
          input-align="right"
          @input="
            analysis.value02 = analysis.value02
              .replace(/(?<=[0-9]*\.[0-9]{1})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value03"
          label="淋巴细胞百分比 (LYM%) [%] "
          placeholder="实数，保留1位小数"
          input-align="right"
          @input="
            analysis.value03 = analysis.value03
              .replace(/(?<=[0-9]*\.[0-9]{1})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value04"
          label="血红蛋白 (Hb) [g/L]"
          placeholder="大于0的正整数"
          input-align="right"
          @input="
            analysis.value04 = analysis.value04
              .replace(/[^0-9]/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value05"
          label="血小板计数 (PLT) [*10^9/L] "
          placeholder="大于0的整数"
          input-align="right"
          @input="
            analysis.value05 = analysis.value05
              .replace(/[^0-9]/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value06"
          label="总胆红素 (TBIL) [umol/L]  "
          placeholder="实数，保留1位小数"
          input-align="right"
          @input="
            analysis.value06 = analysis.value06
              .replace(/(?<=[0-9]*\.[0-9]{1})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value07"
          label="白蛋白 (ALB) [g/L]  "
          placeholder="大于0的正整数"
          input-align="right"
          @input="
            analysis.value07 = analysis.value07
              .replace(/[^0-9]/g, '')
              .replace(/^0$/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value08"
          label="空腹血糖 (FBG) [mmol/L]"
          placeholder="实数，保留1位小数"
          input-align="right"
          @input="
            analysis.value08 = analysis.value08
              .replace(/(?<=[0-9]*\.[0-9]{1})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value09"
          label="HbA1c [%]"
          placeholder="实数，保留1位小数"
          input-align="right"
          @input="
            analysis.value09 = analysis.value09
              .replace(/(?<=[0-9]*\.[0-9]{1})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value10"
          label="肌酐 (CRE) [umol/L] "
          placeholder="大于0的正整数"
          input-align="right"
          @input="
            analysis.value10 = analysis.value10
              .replace(/[^0-9]/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value11"
          label="胆固醇 (CHOL) [mmol/L]  "
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value11 = analysis.value11
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value12"
          label="甘油三酯 (TG) [mmol/L] "
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value12 = analysis.value12
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value13"
          label="甲胎蛋白 (AFP) [ng/mL]  "
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value13 = analysis.value13
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value14"
          label="癌胚抗原 (CEA) [ng/mL] "
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value14 = analysis.value14
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value15"
          label="糖类抗原19-9 (CA19-9) [U/mL]"
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value15 = analysis.value15
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value16"
          label="糖类抗原125 (CA125) [U/mL] "
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value16 = analysis.value16
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value17"
          label="糖类抗原7-24 (CA724) [U/mL]"
          placeholder="实数，保留2位小数"
          input-align="right"
          @input="
            analysis.value17 = analysis.value17
              .replace(/(?<=[0-9]*\.[0-9]{2})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="analysis.value18"
          label="免疫球蛋白G4 (IgG4) [g/L] "
          placeholder="实数，保留3位小数"
          input-align="right"
          @input="
            analysis.value18 = analysis.value18
              .replace(/(?<=[0-9]*\.[0-9]{3})([0-9]*)/g, '')
              .replace(/[^0-9\.]/g, '')
          "
          :readonly="disable"
        />
      </van-cell-group>
    </div>
    <!--          提交的按钮-->
    <div
      style="
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 5vh;
      "
    >
      <van-button round type="info" style="width: 80px" v-on:click="cancelBtn"
        >取消</van-button
      >
      <van-button
        round
        type="info"
        style="margin: auto 20px; width: 80px"
        v-on:click="saveBtn"
        :disabled="disable"
        >保存</van-button
      >
      <van-button
        round
        type="info"
        style="width: 80px"
        v-on:click="uploadBtn"
        :disabled="disable"
        >上传</van-button
      >
    </div>
  </div>
</template>

<script>
  //(?<=[0-9]*\.[0-9]{2})([0-9]*) --> 保留两位小数的正则表达式
  // (?<=[0-9]*\.[0-9]{1})([0-9]*) --> 保留一位小数
  import { Notify } from 'vant'
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
    props: {
      id: String,
      analysis_prop: Object,
      disable: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      cancelBtn() {
        this.$router.back()
      },
      saveBtn() {
        if (this.id != '') {
          this.$emit('saveItem')
          this.$router.replace('/DataManage/EditingItem')
        } else
          Notify({
            message: '保存失败，必须输入住院号！',
            duration: 1000,
            color: 'black',
            background: '#ffe1e1'
          })
      },
      uploadBtn() {
        this.$emit('uploadItem')
      }
    },
    created() {
      this.analysis.value01 = this.analysis_prop.analysis_WBC
      this.analysis.value02 = this.analysis_prop.analysis_NEU
      this.analysis.value03 = this.analysis_prop.analysis_LYM
      this.analysis.value04 = this.analysis_prop.analysis_Hb
      this.analysis.value05 = this.analysis_prop.analysis_PLT
      this.analysis.value06 = this.analysis_prop.analysis_TBIL
      this.analysis.value07 = this.analysis_prop.analysis_ALB
      this.analysis.value08 = this.analysis_prop.analysis_FBG
      this.analysis.value09 = this.analysis_prop.analysis_HbA1c
      this.analysis.value10 = this.analysis_prop.analysis_CRE
      this.analysis.value11 = this.analysis_prop.analysis_CHOL
      this.analysis.value12 = this.analysis_prop.analysis_TG
      this.analysis.value13 = this.analysis_prop.analysis_AFP
      this.analysis.value14 = this.analysis_prop.analysis_CEA
      this.analysis.value15 = this.analysis_prop.analysis_CA199
      this.analysis.value16 = this.analysis_prop.analysis_CA125
      this.analysis.value17 = this.analysis_prop.analysis_CA724
      this.analysis.value18 = this.analysis_prop.analysis_IgG4
    },
    updated() {
      this.$emit('saveAnalysis', this.analysis)
    }
  }
</script>

<style scoped>
  .van-field__label {
    width: 24em !important;
  }
  .van-button--round {
    border-radius: 10px !important;
    background: #913935;
    border: #913935;
  }

  .van-button {
    height: 44px !important;
  }
</style>
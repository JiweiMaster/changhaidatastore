<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="病理诊断*"
          placeholder="必填"
          @click="show = true"
          input-align="right"
        />
        <van-popup v-model="show" position="bottom">
          <van-cascader
            v-model="cascaderValue"
            :options="options"
            @close="show = false"
            @finish="onFinish"
            input-align="right"
          />
        </van-popup>

        <van-field
          v-if="this.show_IPMN_1 === true"
          v-model="fieldValue_IPMN_1"
          is-link
          readonly
          label="IPMN型态1"
          @click="show_IPMN_1_cascader = true"
          input-align="right"
        />
        <van-popup v-model="show_IPMN_1_cascader" position="bottom">
          <van-cascader
            v-model="cascaderValue_IPMN_1"
            :options="options_IPMN_1"
            @close="show_IPMN_1_cascader = false"
            @finish="onFinish_IPMN_1"
            input-align="right"
          />
        </van-popup>
        <van-field
          v-if="this.show_IPMN_2 === true"
          v-model="fieldValue_IPMN_2"
          is-link
          readonly
          label="IPMN型态2"
          @click="show_IPMN_2_cascader = true"
          input-align="right"
        />
        <van-popup v-model="show_IPMN_2_cascader" position="bottom">
          <van-cascader
            v-model="cascaderValue_IPMN_2"
            :options="options_IPMN_2"
            @close="show_IPMN_2_cascader = false"
            @finish="onFinish_IPMN_2"
            input-align="right"
          />
        </van-popup>

        <van-field
          v-if="this.show_other === true"
          v-model="value_cascader"
          label="其他"
          input-align="right"
        ></van-field>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value1"
          label="最大直径(cm)"
          placeholder="限数字，可带小数点"
          input-align="right"
          @input="value1 = value1.replace(/[^.\d]/g, '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue1"
          is-link
          readonly
          label="异型程度"
          @click="show1 = true"
          input-align="right"
        />
        <van-popup v-model="show1" position="bottom">
          <van-cascader
            v-model="cascaderValue1"
            :options="options1"
            @close="show1 = false"
            @finish="onFinish1"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue2"
          is-link
          readonly
          label="切缘中度以上异型"
          @click="show2 = true"
          input-align="right"
        />
        <van-popup v-model="show2" position="bottom">
          <van-cascader
            v-model="cascaderValue2"
            :options="options2"
            @close="show2 = false"
            @finish="onFinish2"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue3"
          is-link
          readonly
          label="脉管侵犯"
          @click="show3 = true"
          input-align="right"
        />
        <van-popup v-model="show3" position="bottom">
          <van-cascader
            v-model="cascaderValue3"
            :options="options3"
            @close="show3 = false"
            @finish="onFinish3"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue4"
          is-link
          readonly
          label="胰周脂肪浸润"
          @click="show4 = true"
          input-align="right"
        />
        <van-popup v-model="show4" position="bottom">
          <van-cascader
            v-model="cascaderValue4"
            :options="options4"
            @close="show4 = false"
            @finish="onFinish4"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue5"
          is-link
          readonly
          label="大血管侵犯"
          @click="show5 = true"
          input-align="right"
        />
        <van-popup v-model="show5" position="bottom">
          <van-cascader
            v-model="cascaderValue5"
            :options="options5"
            @close="show5 = false"
            @finish="onFinish5"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value2"
          label="总淋巴结数(个)"
          placeholder="大于等于0的整数"
          input-align="right"
          @input="value2 = value2.replace(/[^0-9]/g, '').replace('0', '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value3"
          label="阳性淋巴结数(个)"
          placeholder="大于等于0的整数"
          input-align="right"
          @input="value3 = value3.replace(/[^0-9]/g, '').replace('0', '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue6"
          is-link
          readonly
          label="其他脏器转移"
          @click="show6 = true"
          input-align="right"
        />
        <van-popup v-model="show6" position="bottom">
          <van-cascader
            v-model="cascaderValue6"
            :options="options6"
            @close="show6 = false"
            @finish="onFinish6"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value4"
          label="Ki-67(%)"
          placeholder="大于等于0的整数"
          input-align="right"
          @input="value4 = value4.replace(/[^0-9]/g, '').replace('0', '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="value5"
                   label="其他备注"
                   input-align="right" />
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
        >保存</van-button
      >
      <van-button round type="info" style="width: 80px" v-on:click="uploadBtn"
        >上传</van-button
      >
    </div>
  </div>
</template>

<script>
  import { Notify } from 'vant'
  export default {
    name: 'PathologyComponent.vue',
    components: {},
    data() {
      return {
        show: false,
        fieldValue: '',
        cascaderValue: '',
        options: [
          {
            text: '胰腺浆液性腺瘤(SCN)',
            value: '100',
            children: [
              { text: '寡囊腺瘤', value: '110' },
              { text: '微囊腺瘤', value: '120' },
              { text: 'N/A', value: '130' }
            ]
          },
          {
            text: '胰腺粘液性囊腺瘤(MCN)',
            value: '200'
          },
          {
            text: '胰腺导管内乳头状粘液性瘤(IPMN)',
            value: '300'
          },
          // {
          //   text: '胰腺导管内乳头状粘液性瘤(IPMN)型态1',
          //   value: '300',
          //   children: [
          //     { text: '主胰管型', value: '310' },
          //     { text: '分支胰管型', value: '320' },
          //     { text: '混合胰管型', value: '330' }
          //   ]
          // },
          // {
          //   text: '胰腺导管内乳头状粘液性瘤(IPMN)型态2',
          //   value: '400',
          //   children: [
          //     { text: '胃型', value: '410' },
          //     { text: '肠型', value: '420' },
          //     { text: '胰胆管型', value: '430' },
          //     { text: '嗜酸细胞型', value: '440' },
          //     { text: '未报告/不详', value: '450' }
          //   ]
          // },
          {
            text: '胰腺实性假乳头状肿瘤(SPN)',
            value: '500'
          },
          {
            text: '胰腺神经内分泌肿瘤(pNET)',
            value: '600'
          },
          {
            text: '其他',
            value: '700'
          }
        ],

        show_other: false,
        value_cascader: '',

        show_IPMN_1: false,
        show_IPMN_1_cascader: false,
        fieldValue_IPMN_1: '',
        cascaderValue_IPMN_1: '',
        options_IPMN_1: [
          { text: '主胰管型', value: '100' },
          { text: '分支胰管型', value: '200' },
          { text: '混合胰管型', value: '300' }
        ],
        show_IPMN_2: false,
        show_IPMN_2_cascader: false,
        fieldValue_IPMN_2: '',
        cascaderValue_IPMN_2: '',
        options_IPMN_2: [
          { text: '胃型', value: '100' },
          { text: '肠型', value: '200' },
          { text: '胰胆管型', value: '300' },
          { text: '嗜酸细胞型', value: '400' },
          { text: '未报告/不详', value: '500' }
        ],

        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',

        show1: false,
        fieldValue1: '',
        cascaderValue1: '',
        options1: [
          {
            text: '无',
            value: '100'
          },
          {
            text: '低级别',
            value: '200'
          },
          {
            text: '高级别',
            value: '300'
          },
          {
            text: '原位癌',
            value: '400'
          },
          {
            text: '浸润性癌',
            value: '500'
          }
        ],

        show2: false,
        fieldValue2: '',
        cascaderValue2: '',
        options2: [
          {
            text: '无',
            value: '100'
          },
          {
            text: '有',
            value: '200'
          }
        ],

        show3: false,
        fieldValue3: '',
        cascaderValue3: '',
        options3: [
          {
            text: '无',
            value: '100'
          },
          {
            text: '有',
            value: '200'
          }
        ],

        show4: false,
        fieldValue4: '',
        cascaderValue4: '',
        options4: [
          {
            text: '无',
            value: '100'
          },
          {
            text: '有',
            value: '200'
          }
        ],

        show5: false,
        fieldValue5: '',
        cascaderValue5: '',
        options5: [
          {
            text: '无',
            value: '100'
          },
          {
            text: '有',
            value: '200'
          }
        ],

        show6: false,
        fieldValue6: '',
        cascaderValue6: '',
        options6: [
          {
            text: '无',
            value: '100'
          },
          {
            text: '有',
            value: '200'
          }
        ]
      }
    },
    props: { id: String, pathology: Object },
    methods: {
      onFinish({ selectedOptions }) {
        this.show = false
        this.fieldValue = selectedOptions.map((option) => option.text).join('/')
        this.show_other = selectedOptions[0].value === '700' ? true : false
        if (this.show_other == false) this.value_cascader = ''
        this.show_IPMN_1 = selectedOptions[0].value === '300' ? true : false
        this.show_IPMN_2 = this.show_IPMN_1
        if (this.show_IPMN_1 === false) {
          //如果不显示分型，分型之前输入的值清空
          this.fieldValue_IPMN_1 = ''
          this.fieldValue_IPMN_2 = ''
        }
      },
      onFinish_IPMN_1({ selectedOptions }) {
        this.show_IPMN_1_cascader = false
        this.fieldValue_IPMN_1 = selectedOptions
          .map((option) => option.text)
          .join('/')
      },
      onFinish_IPMN_2({ selectedOptions }) {
        this.show_IPMN_2_cascader = false
        this.fieldValue_IPMN_2 = selectedOptions
          .map((option) => option.text)
          .join('/')
      },
      onFinish1({ selectedOptions }) {
        this.show1 = false
        this.fieldValue1 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish2({ selectedOptions }) {
        this.show2 = false
        this.fieldValue2 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish3({ selectedOptions }) {
        this.show3 = false
        this.fieldValue3 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish4({ selectedOptions }) {
        this.show4 = false
        this.fieldValue4 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish5({ selectedOptions }) {
        this.show5 = false
        this.fieldValue5 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish6({ selectedOptions }) {
        this.show6 = false
        this.fieldValue6 = selectedOptions.map((option) => option.text).join('/')
      },

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
      if (this.pathology.pathology_blzd === '胰腺导管内乳头状粘液性瘤(IPMN)') {
        this.show_IPMN_1 = true
        this.show_IPMN_2 = true
      } else if (this.pathology.pathology_blzd === '其他') this.show_other = true
      this.fieldValue = this.pathology.pathology_blzd
      this.fieldValue_IPMN_1 = this.pathology.pathology_blzd_IPMN_1
      this.fieldValue_IPMN_2 = this.pathology.pathology_blzd_IPMN_2
      this.value_cascader = this.pathology.pathology_blzd_other
      this.value1 = this.pathology.pathology_zdzj
      this.fieldValue1 = this.pathology.pathology_yxcd
      this.fieldValue2 = this.pathology.pathology_qyzdysyx
      this.fieldValue3 = this.pathology.pathology_mgqf
      this.fieldValue4 = this.pathology.pathology_yzzfjr
      this.fieldValue5 = this.pathology.pathology_dxgqf
      this.value2 = this.pathology.pathology_zlbjs
      this.value3 = this.pathology.pathology_yxlbjs
      this.fieldValue6 = this.pathology.pathology_qtzqzy
      this.value4 = this.pathology.pathology_Ki67
      this.value5 = this.pathology.pathology_qtbz
    },
    updated() {
      this.$emit(
        'savePathology',
        this.fieldValue,
        this.fieldValue_IPMN_1,
        this.fieldValue_IPMN_2,
        this.value_cascader, //其他项的输入值
        this.value1,
        this.fieldValue1,
        this.fieldValue2,
        this.fieldValue3,
        this.fieldValue4,
        this.fieldValue5,
        this.value2,
        this.value3,
        this.fieldValue6,
        this.value4,
        this.value5
      )
    }
  }
</script>
<style scoped>
  .van-button--round {
    border-radius: 10px !important;
    background: #913935;
    border: #913935;
  }

  .van-button {
    height: 44px !important;
  }
</style>
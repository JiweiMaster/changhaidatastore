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
        />
        <van-popup v-model="show" position="bottom">
          <van-cascader
            v-model="cascaderValue"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>

        <van-field
          v-if="this.show_other === true"
          v-model="value_cascader"
          label="其他"
        ></van-field>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value1"
          label="最大直径（cm）"
          placeholder="限数字，可带小数点"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue1"
          is-link
          readonly
          label="异型程度"
          @click="show1 = true"
        />
        <van-popup v-model="show1" position="bottom">
          <van-cascader
            v-model="cascaderValue1"
            :options="options1"
            @close="show1 = false"
            @finish="onFinish1"
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
        />
        <van-popup v-model="show2" position="bottom">
          <van-cascader
            v-model="cascaderValue2"
            :options="options2"
            @close="show2 = false"
            @finish="onFinish2"
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
        />
        <van-popup v-model="show3" position="bottom">
          <van-cascader
            v-model="cascaderValue3"
            :options="options3"
            @close="show3 = false"
            @finish="onFinish3"
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
        />
        <van-popup v-model="show4" position="bottom">
          <van-cascader
            v-model="cascaderValue4"
            :options="options4"
            @close="show4 = false"
            @finish="onFinish4"
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
        />
        <van-popup v-model="show5" position="bottom">
          <van-cascader
            v-model="cascaderValue5"
            :options="options5"
            @close="show5 = false"
            @finish="onFinish5"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value2"
          label="总淋巴结数（个）"
          placeholder="大于等于0的整数"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value3"
          label="阳性淋巴结数（个）"
          placeholder="大于等于0的整数"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue6"
          is-link
          readonly
          label="其他脏器转移"
          @click="show6 = true"
        />
        <van-popup v-model="show6" position="bottom">
          <van-cascader
            v-model="cascaderValue6"
            :options="options6"
            @close="show6 = false"
            @finish="onFinish6"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value4"
          label="Ki-67(%)"
          placeholder="大于等于0的整数"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="value5" label="其他备注" />
      </van-cell-group>
    </div>
    <!--          提交的按钮-->
    <div style="display: flex; justify-content: center; margin-top: 50px">
      <van-button round type="info" style="width: 80px">取消</van-button>
      <van-button round type="info" style="margin: auto 20px; width: 80px"
        >保存</van-button
      >
      <van-button round type="info" style="width: 80px">上传</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PathologyComponent.vue',
    components: {},
    props: {
      msg: String
    },
    data() {
      return {
        show: false,
        fieldValue: '',
        cascaderValue: '',
        options: [
          {
            text: '胰腺浆液性腺瘤（SCN）',
            value: '100',
            children: [
              { text: '寡囊腺瘤', value: '110' },
              { text: '微囊腺瘤', value: '120' },
              { text: 'N/A', value: '130' }
            ]
          },
          {
            text: '胰腺粘液性囊腺瘤（MCN）',
            value: '200'
          },
          {
            text: '胰腺导管内乳头状粘液性瘤（IPMN）型态1',
            value: '300',
            children: [
              { text: '主胰管型', value: '310' },
              { text: '分支胰管型', value: '320' },
              { text: '混合胰管型', value: '330' }
            ]
          },
          {
            text: '胰腺导管内乳头状粘液性瘤（IPMN）型态2',
            value: '400',
            children: [
              { text: '胃型', value: '410' },
              { text: '肠型', value: '420' },
              { text: '胰胆管型', value: '430' },
              { text: '嗜酸细胞型', value: '440' },
              { text: '未报告/不详', value: '450' }
            ]
          },
          {
            text: '胰腺实性假乳头状肿瘤（SPN）',
            value: '500'
          },
          {
            text: '胰腺神经内分泌肿瘤（pNET））',
            value: '600'
          },
          {
            text: '其他',
            value: '700'
          }
        ],

        show_other: false,
        value_cascader: '',

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
    methods: {
      onFinish({ selectedOptions }) {
        this.show = false
        this.fieldValue = selectedOptions[selectedOptions.length - 1].text
        if (selectedOptions[0].value === '700') this.show_other = true
      },
      onFinish1({ selectedOptions }) {
        this.show1 = false
        this.fieldValue1 = selectedOptions[selectedOptions.length - 1].text
      },
      onFinish2({ selectedOptions }) {
        this.show2 = false
        this.fieldValue2 = selectedOptions[selectedOptions.length - 1].text
      },
      onFinish3({ selectedOptions }) {
        this.show3 = false
        this.fieldValue3 = selectedOptions[selectedOptions.length - 1].text
      },
      onFinish4({ selectedOptions }) {
        this.show4 = false
        this.fieldValue4 = selectedOptions[selectedOptions.length - 1].text
      },
      onFinish5({ selectedOptions }) {
        this.show5 = false
        this.fieldValue5 = selectedOptions[selectedOptions.length - 1].text
      },
      onFinish6({ selectedOptions }) {
        this.show6 = false
        this.fieldValue6 = selectedOptions[selectedOptions.length - 1].text
      }
    }
  }
</script>
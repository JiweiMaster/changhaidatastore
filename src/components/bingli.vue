<template>
  <div>
    <div>
      <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="病理诊断"
          placeholder="必填"
          @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="必填"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
      <van-cell-group>
        <van-field v-model="value1" label="最大直径（cm）" placeholder="可以允许输入非整数，限数字，可带小数点" />
      </van-cell-group>
      <van-field
        v-model="fieldValue1"
        is-link
        readonly
        label="异型程度"
        placeholder="无/低级别/高级别/原位癌/浸润性癌"
        @click="show1 = true"
      />
      <van-popup v-model="show1" round position="bottom">
        <van-cascader
          v-model="cascaderValue1"
          title=""
          :options="options1"
          @close="show1 = false"
          @finish="onFinish1"
        />
      </van-popup>
      <van-field
        v-model="fieldValue2"
        is-link
        readonly
        label="切缘中度以上异型"
        placeholder="无/有"
        @click="show2 = true"
      />
      <van-popup v-model="show2" round position="bottom">
        <van-cascader
          v-model="cascaderValue2"
          title=""
          :options="options2"
          @close="show2 = false"
          @finish="onFinish2"
        />
      </van-popup>
      <van-field
        v-model="fieldValue3"
        is-link
        readonly
        label="脉管侵犯"
        placeholder="无/有"
        @click="show3 = true"
      />
      <van-popup v-model="show3" round position="bottom">
        <van-cascader
          v-model="cascaderValue3"
          title=""
          :options="options3"
          @close="show3 = false"
          @finish="onFinish3"
        />
      </van-popup>
      <van-field
        v-model="fieldValue4"
        is-link
        readonly
        label="胰周脂肪浸润"
        placeholder="无/有"
        @click="show4 = true"
      />
      <van-popup v-model="show4" round position="bottom">
        <van-cascader
          v-model="cascaderValue4"
          title=""
          :options="options4"
          @close="show4 = false"
          @finish="onFinish4"
        />
      </van-popup>
      <van-field
        v-model="fieldValue5"
        is-link
        readonly
        label="大血管侵犯"
        placeholder="无/有"
        @click="show5 = true"
      />
      <van-popup v-model="show5" round position="bottom">
        <van-cascader
          v-model="cascaderValue5"
          title=""
          :options="options5"
          @close="show5 = false"
          @finish="onFinish5"
        />
      </van-popup>
      <van-cell-group>
        <van-field v-model="value2" label="总淋巴结数（个）" placeholder="输入数据为大于等于0的整数" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value3" label="阳性淋巴结数（个）" placeholder="输入数据为大于等于0的整数" />
      </van-cell-group>
      <van-field
        v-model="fieldValue6"
        is-link
        readonly
        label="其他脏器转移"
        placeholder="无/有"
        @click="show6 = true"
      />
      <van-popup v-model="show6" round position="bottom">
        <van-cascader
          v-model="cascaderValue6"
          title=""
          :options="options6"
          @close="show6 = false"
          @finish="onFinish6"
        />
      </van-popup>
      <van-cell-group>
        <van-field v-model="value4" label="Ki-67（%）" placeholder="输入数据为大于等于0的整数" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value5" label="其他备注）" placeholder="" />
      </van-cell-group>
    </div>
    <!--          提交的按钮-->
    <div style="margin-top: 50px; margin-left: 30px;">
      <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">取消</van-button>
      <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">保存</van-button>
      <van-button round type="info" style="float: left; margin-right: 20px; width: 80px">上传</van-button>
    </div>
  </div>

</template>

<script>

export default {
  name: "bingli.vue",
    components: {
  },
  props: {
    msg: String
  },
  data() {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '胰腺浆液性腺瘤（SCN）',
          value: '330000',
          children: [{ text: '寡囊腺瘤', value: '330100' },
            { text: '微囊腺瘤', value: '330200' },
            { text: 'N/A', value: '330300' }],
        },
        {
          text: '胰腺粘液性囊腺瘤（MCN）',
          value: '320000',

        },
        {
          text: '胰腺导管内乳头状粘液性瘤（IPMN）型态1',
          value: '340000',
          children: [{ text: '主胰管型', value: '340100' },
            { text: '分支胰管型', value: '340200' },
            { text: '混合胰管型', value: '340300' }],
        },
        {
          text: '胰腺导管内乳头状粘液性瘤（IPMN）型态2',
          value: '350000',
          children: [{ text: '胃型', value: '350100' },
            { text: '肠型', value: '350200' },
            { text: '胰胆管型', value: '350300' },
            { text: '嗜酸细胞型', value: '350400' },
            { text: '未报告/不详', value: '350500' }],
        },
        {
          text: '胰腺实性假乳头状肿瘤（SPN）',
          value: '360000',

        },
        {
          text: '胰腺神经内分泌肿瘤（pNET））',
          value: '370000',

        },
        {
          text: '其他',
          value: '380000',

        },

      ],
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      show1: false,
      fieldValue1: '',
      cascaderValue1: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options1: [
        {
          text: '无',
          value: '400000',

        },
        {
          text: '低级别',
          value: '410000',

        },
        {
          text: '高级别',
          value: '420000',

        },
        {
          text: '原位癌',
          value: '430000',

        },
        {
          text: '浸润性癌',
          value: '440000',

        },
      ],
      show2: false,
      fieldValue2: '',
      cascaderValue2: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options2: [
        {
          text: '无',
          value: '500000',

        },
        {
          text: '有',
          value: '510000',

        },
      ],
      show3: false,
      fieldValue3: '',
      cascaderValue3: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options3: [
        {
          text: '无',
          value: '600000',

        },
        {
          text: '有',
          value: '610000',

        },
      ],
      show4: false,
      fieldValue4: '',
      cascaderValue4: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options4: [
        {
          text: '无',
          value: '700000',

        },
        {
          text: '有',
          value: '710000',

        },
      ],
      show5: false,
      fieldValue5: '',
      cascaderValue5: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options5: [
        {
          text: '无',
          value: '800000',

        },
        {
          text: '有',
          value: '810000',

        },
      ],
      show6: false,
      fieldValue6: '',
      cascaderValue6: '',
      options6: [
        {
          text: '无',
          value: '800000',

        },
        {
          text: '有',
          value: '810000',

        },
      ],

    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');

    },
    onFinish1({ selectedOptions }) {
      this.show1 = false;
      this.fieldValue1 = selectedOptions.map((option) => option.text).join('/');

    },
    onFinish2({ selectedOptions }) {
      this.show2 = false;
      this.fieldValue2 = selectedOptions.map((option) => option.text).join('/');

    },
    onFinish3({ selectedOptions }) {
      this.show3 = false;
      this.fieldValue3 = selectedOptions.map((option) => option.text).join('/');

    },
    onFinish4({ selectedOptions }) {
      this.show4 = false;
      this.fieldValue4 = selectedOptions.map((option) => option.text).join('/');

    },
    onFinish5({ selectedOptions }) {
      this.show5 = false;
      this.fieldValue5 = selectedOptions.map((option) => option.text).join('/');

    },
    onFinish6({ selectedOptions }) {
      this.show6 = false;
      this.fieldValue6 = selectedOptions.map((option) => option.text).join('/');

    },
  },

};
</script>

<style>
.van-field__label{
  width: 15em !important;
}

</style>
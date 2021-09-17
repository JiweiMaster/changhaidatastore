 <template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="fieldValue01"
          is-link
          readonly
          label="手术方式"
          @click="show01 = true"
        />
        <van-popup v-model="show01" round position="bottom">
          <van-cascader
            v-model="cascaderValue01"
            :options="options01"
            @close="show01 = false"
            @finish="onFinish01"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue02"
          is-link
          readonly
          label="手术途径"
          @click="show02 = true"
        />
        <van-popup v-model="show02" round position="bottom">
          <van-cascader
            v-model="cascaderValue02"
            :options="options02"
            @close="show02 = false"
            @finish="onFinish02"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue03"
          is-link
          readonly
          label="胰肠吻合方式"
          @click="show03 = true"
        />
        <van-popup v-model="show03" round position="bottom">
          <van-cascader
            v-model="cascaderValue03"
            :options="options03"
            @close="show03 = false"
            @finish="onFinish03"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue04"
          is-link
          readonly
          label="胰腺质地"
          @click="show04 = true"
        />
        <van-popup v-model="show04" round position="bottom">
          <van-cascader
            v-model="cascaderValue04"
            :options="options04"
            @close="show04 = false"
            @finish="onFinish04"
          />
        </van-popup>
      </van-cell-group>
    </div>
    <!--          提交的按钮-->
    <div style="display: flex; justify-content: center; margin-top: 50px">
      <van-button round type="info" style="width: 80px">取消</van-button>
      <van-button round type="info" style="margin: auto 20px; width: 80px"
        >保存</van-button
      >
      <van-button round type="info" style="width: 80px">上传</van-button>
      <div></div>
    </div>
  </div>
</template>

<script>
  //  import { Toast } from 'vant'

  export default {
    name: 'SurgeryComponent.vue',
    data() {
      return {
        show01: false,
        fieldValue01: '',
        cascaderValue01: '',
        options01: [
          {
            text: '胰十二指肠切除术',
            children: [{ text: 'PPPD' }, { text: '不保留幽门' }]
          },
          {
            text: '胰腺中段切除术'
          },
          {
            text: '胰体尾切除术',
            children: [
              {
                text: '保留脾脏',
                children: [{ text: 'Warshaw法' }, { text: 'Kimura法' }]
              },
              { text: '不保留脾脏' }
            ]
          },
          {
            text: '局部肿瘤剜除'
          },
          {
            text: '次全胰切除术（PPTP-SP）'
          },
          {
            text: '全部胰腺切除术',
            children: [
              {
                text: '保留脾脏',
                children: [{ text: 'Warshaw法' }, { text: 'Kimura法' }]
              },
              { text: '不保留脾脏' }
            ]
          },
          {
            text: '其他'
          }
        ],

        show02: false,
        fieldValue02: '',
        cascaderValue02: '',
        options02: [
          { text: '开腹手术' },
          { text: '腹腔镜手术' },
          { text: '机器人手术' }
        ],

        show03: false,
        fieldValue03: '',
        cascaderValue03: '',
        options03: [
          {
            text: '有胰肠吻合',
            children: [
              {
                text: '吻合方式',
                children: [
                  { text: '导管对粘膜' },
                  { text: '套入式吻合' },
                  { text: '其他' }
                ]
              },
              {
                text: '胰管引流管',
                children: [
                  { text: '内引流' },
                  { text: '外引流' },
                  { text: '未放置胰管引流管' }
                ]
              },
              { text: '胰管直径' }
            ]
          },
          { text: '无胰肠吻合' }
        ],

        show04: false,
        fieldValue04: '',
        cascaderValue04: '',
        options04: [{ text: '软' }, { text: '硬' }]
      }
    },
    methods: {
      onFinish01({ selectedOptions }) {
        this.show01 = false
        this.fieldValue01 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish02({ selectedOptions }) {
        this.show02 = false
        this.fieldValue02 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish03({ selectedOptions }) {
        this.show03 = false
        this.fieldValue03 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish04({ selectedOptions }) {
        this.show04 = false
        this.fieldValue04 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish05({ selectedOptions }) {
        this.show05 = false
        this.fieldValue05 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish06({ selectedOptions }) {
        this.show06 = false
        this.fieldValue06 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish07({ selectedOptions }) {
        this.show07 = false
        this.fieldValue07 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish08({ selectedOptions }) {
        this.show08 = false
        this.fieldValue08 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish09({ selectedOptions }) {
        this.show09 = false
        this.fieldValue09 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish10({ selectedOptions }) {
        this.show10 = false
        this.fieldValue10 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish11({ selectedOptions }) {
        this.show11 = false
        this.fieldValue11 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish12({ selectedOptions }) {
        this.show12 = false
        this.fieldValue12 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish13({ selectedOptions }) {
        this.show13 = false
        this.fieldValue13 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish14({ selectedOptions }) {
        this.show14 = false
        this.fieldValue14 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish15({ selectedOptions }) {
        this.show15 = false
        this.fieldValue15 = selectedOptions.map((option) => option.text).join('/')
      }
    }
  }
</script>

<style>
  .van-field__label {
    width: 7em !important;
  }
  .van-field__control {
    text-align: right !important;
  }
</style>
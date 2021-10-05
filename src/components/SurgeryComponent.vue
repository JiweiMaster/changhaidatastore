 <template>
  <div>
    <div class="surgery-item">
      <van-cell-group>
        <van-field
          v-model="fieldValue01"
          is-link
          readonly
          label="手术方式"
          @click="show01 = true"
          input-align="right"
        />
        <van-popup v-model="show01" position="bottom">
          <van-cascader
            v-model="cascaderValue01"
            :options="options01"
            @close="show01 = false"
            @finish="onFinish01"
            input-align="right"
          />
        </van-popup>

        <van-field
          v-if="this.show_other1 === true"
          v-model="value_cascader1"
          label="其他手术方式"
          input-align="right"
        ></van-field>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue02"
          is-link
          readonly
          label="手术途径"
          @click="show02 = true"
          input-align="right"
        />
        <van-popup v-model="show02" position="bottom">
          <van-cascader
            v-model="cascaderValue02"
            :options="options02"
            @close="show02 = false"
            @finish="onFinish02"
            input-align="right"
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
          input-align="right"
        />
        <van-popup v-model="show03" position="bottom">
          <van-cascader
            v-model="cascaderValue03"
            :options="options03"
            @close="show03 = false"
            @finish="onFinish03"
            input-align="right"
          />
        </van-popup>

        <van-field
          v-if="this.show_other2 === true"
          v-model="value_cascader2"
          label="其他吻合方式"
          input-align="right"
        ></van-field>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue04"
          is-link
          readonly
          label="胰腺质地"
          @click="show04 = true"
          input-align="right"
        />
        <van-popup v-model="show04" position="bottom">
          <van-cascader
            v-model="cascaderValue04"
            :options="options04"
            @close="show04 = false"
            @finish="onFinish04"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value1"
          label="手术时间(min)"
          placeholder="大于0的正整数"
          input-align="right"
          @input="value1 = value1.replace(/[^0-9]/g, '').replace(/^0$/g, '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value2"
          label="术中出血(ml)"
          placeholder="大于等于0的正整数"
          input-align="right"
          @input="value2 = value2.replace(/[^0-9]/g, '').replace(/^0$/g, '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value3"
          label="输血量(ml)"
          placeholder="大于等于0的正整数"
          input-align="right"
          @input="value3 = value3.replace(/[^0-9]/g, '').replace(/^0$/g, '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue05"
          is-link
          readonly
          label="门静脉置换"
          @click="show05 = true"
          input-align="right"
        />
        <van-popup v-model="show05" position="bottom">
          <van-cascader
            v-model="cascaderValue05"
            :options="options05"
            @close="show05 = false"
            @finish="onFinish05"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue06"
          is-link
          readonly
          label="术后胰瘘(POPF)"
          @click="show06 = true"
          input-align="right"
        />
        <van-popup v-model="show06" position="bottom">
          <van-cascader
            v-model="cascaderValue06"
            :options="options06"
            @close="show06 = false"
            @finish="onFinish06"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue07"
          is-link
          readonly
          label="胃排空延迟(DGE)"
          @click="show07 = true"
          input-align="right"
        />
        <van-popup v-model="show07" position="bottom">
          <van-cascader
            v-model="cascaderValue07"
            :options="options07"
            @close="show07 = false"
            @finish="onFinish07"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue08"
          is-link
          readonly
          label="手术后出血(PPH)"
          @click="show08 = true"
          input-align="right"
        />
        <van-popup v-model="show08" position="bottom">
          <van-cascader
            v-model="cascaderValue08"
            :options="options08"
            @close="show08 = false"
            @finish="onFinish08"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue09"
          is-link
          readonly
          label="胆瘘"
          @click="show09 = true"
          input-align="right"
        />
        <van-popup v-model="show09" position="bottom">
          <van-cascader
            v-model="cascaderValue09"
            :options="options09"
            @close="show09 = false"
            @finish="onFinish09"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue10"
          is-link
          readonly
          label="乳糜漏"
          @click="show10 = true"
          input-align="right"
        />
        <van-popup v-model="show10" position="bottom">
          <van-cascader
            v-model="cascaderValue10"
            :options="options10"
            @close="show10 = false"
            @finish="onFinish10"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue11"
          is-link
          readonly
          label="腹腔感染"
          @click="show11 = true"
          input-align="right"
        />
        <van-popup v-model="show11" position="bottom">
          <van-cascader
            v-model="cascaderValue11"
            :options="options11"
            @close="show11 = false"
            @finish="onFinish11"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue12"
          is-link
          readonly
          label="VTE或PE"
          @click="show12 = true"
          input-align="right"
        />
        <van-popup v-model="show12" position="bottom">
          <van-cascader
            v-model="cascaderValue12"
            :options="options12"
            @close="show12 = false"
            @finish="onFinish12"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue13"
          is-link
          readonly
          label="因胰瘘穿刺引流"
          @click="show13 = true"
          input-align="right"
        />
        <van-popup v-model="show13" position="bottom">
          <van-cascader
            v-model="cascaderValue13"
            :options="options13"
            @close="show13 = false"
            @finish="onFinish13"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue14"
          is-link
          readonly
          label="非计划二次手术"
          @click="show14 = true"
          input-align="right"
        />
        <van-popup v-model="show14" position="bottom">
          <van-cascader
            v-model="cascaderValue14"
            :options="options14"
            @close="show14 = false"
            @finish="onFinish14"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue15"
          is-link
          readonly
          label="围术期死亡"
          @click="show15 = true"
          input-align="right"
        />
        <van-popup v-model="show15" position="bottom">
          <van-cascader
            v-model="cascaderValue15"
            :options="options15"
            @close="show15 = false"
            @finish="onFinish15"
            input-align="right"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value4"
          label="术后住院天数(天)"
          placeholder="大于等于0的正整数"
          input-align="right"
          @input="value4 = value4.replace(/[^0-9]/g, '').replace(/^0$/g, '')"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value5[0]"
          label="术后引流液淀粉酶(第1天)"
          placeholder="选择每日中最高的引流液淀粉酶填写"
          center
          input-align="right"
        >
          <template v-slot:button>
            <van-button
              @click="addInput"
              icon="plus"
              class="submit_btn"
              type="danger"
              round
            ></van-button>
          </template>
        </van-field>

        <van-field
          v-for="(item, index) in days"
          :key="index"
          :label="item"
          v-model="value5[index + 1]"
          input-align="right"
        ></van-field>
      </van-cell-group>
    </div>
    <!--          提交的按钮-->
    <div
      style="
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 5vh;
      ">
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
      <div></div>
    </div>
  </div>
</template>

<script>
  import { Notify } from 'vant'

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
            value: '100',
            children: [
              { text: 'PPPD', value: '110' },
              { text: '不保留幽门', value: '120' }
            ]
          },
          {
            text: '胰腺中段切除术',
            value: '200'
          },
          {
            text: '胰体尾切除术',
            value: '300',
            children: [
              {
                text: '保留脾脏',
                value: '310',
                children: [
                  { text: 'Warshaw法', value: '311' },
                  { text: 'Kimura法', value: '312' }
                ]
              },
              { text: '不保留脾脏', value: '320' }
            ]
          },
          {
            text: '局部肿瘤剜除',
            value: '400'
          },
          {
            text: '次全胰切除术(PPTP-SP)',
            value: '500'
          },
          {
            text: '全部胰腺切除术',
            value: '600',
            children: [
              {
                text: '保留脾脏',
                value: '610',
                children: [
                  { text: 'Warshaw法', value: '611' },
                  { text: 'Kimura法', value: '612' }
                ]
              },
              { text: '不保留脾脏', value: '620' }
            ]
          },
          {
            text: '其他',
            value: '700'
          }
        ],

        show02: false,
        fieldValue02: '',
        cascaderValue02: '',
        options02: [
          { text: '开腹手术', value: '100' },
          { text: '腹腔镜手术', value: '200' },
          { text: '机器人手术', value: '300' }
        ],

        show03: false,
        fieldValue03: '',
        cascaderValue03: '',
        options03: [
          {
            text: '有胰肠吻合',
            value: '100',
            children: [
              {
                text: '吻合方式',
                value: '110',
                children: [
                  { text: '导管对粘膜', value: '111' },
                  { text: '套入式吻合', value: '112' },
                  { text: '其他', value: '113' }
                ]
              },
              {
                text: '胰管引流管',
                value: '120',
                children: [
                  { text: '内引流', value: '121' },
                  { text: '外引流', value: '122' },
                  { text: '未放置胰管引流管', value: '123' }
                ]
              },
              { text: '胰管直径', value: '130' }
            ]
          },
          { text: '无胰肠吻合', value: '200' }
        ],

        show04: false,
        fieldValue04: '',
        cascaderValue04: '',
        options04: [
          { text: '软', value: '100' },
          { text: '硬', value: '200' }
        ],

        show_other1: false,
        value_cascader1: '',
        show_other2: false,
        value_cascader2: '',

        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: [], //新加输入框的填写值

        show05: false,
        fieldValue05: '',
        cascaderValue05: '',
        options05: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show06: false,
        fieldValue06: '',
        cascaderValue06: '',
        options06: [
          { text: '无', value: '100' },
          { text: '生化漏', value: '200' },
          { text: 'B级', value: '300' },
          { text: 'C级', value: '400' }
        ],

        show07: false,
        fieldValue07: '',
        cascaderValue07: '',
        options07: [
          { text: '无', value: '100' },
          { text: 'A级', value: '200' },
          { text: 'B级', value: '300' },
          { text: 'C级', value: '400' }
        ],

        show08: false,
        fieldValue08: '',
        cascaderValue08: '',
        options08: [
          { text: '无', value: '100' },
          { text: 'A级', value: '200' },
          { text: 'B级', value: '300' },
          { text: 'C级', value: '400' }
        ],

        show09: false,
        fieldValue09: '',
        cascaderValue09: '',
        options09: [
          { text: '无', value: '100' },
          { text: 'A级', value: '200' },
          { text: 'B级', value: '300' },
          { text: 'C级', value: '400' }
        ],

        show10: false,
        fieldValue10: '',
        cascaderValue10: '',
        options10: [
          { text: '无', value: '100' },
          { text: 'A级', value: '200' },
          { text: 'B级', value: '300' },
          { text: 'C级', value: '400' }
        ],

        show11: false,
        fieldValue11: '',
        cascaderValue11: '',
        options11: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show12: false,
        fieldValue12: '',
        cascaderValue12: '',
        options12: [
          { text: '无', value: '100' },
          { text: 'VTE', value: '200' },
          { text: 'PE', value: '300' }
        ],

        show13: false,
        fieldValue13: '',
        cascaderValue13: '',
        options13: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show14: false,
        fieldValue14: '',
        cascaderValue14: '',
        options14: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show15: false,
        fieldValue15: '',
        cascaderValue15: '',
        options15: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        days: [], //术后引流淀粉酶(天数)
        day: 1 //供for使用
      }
    },
    props: { id: String, surgery: Object },
    methods: {
      onFinish01({ selectedOptions }) {
        this.show01 = false
        this.fieldValue01 = selectedOptions.map((option) => option.text).join('/')
        if (selectedOptions[0].value === '700') this.show_other1 = true
        else {
          this.show_other1 = false
          this.value_cascader1 = ''
        }
      },
      onFinish02({ selectedOptions }) {
        this.show02 = false
        this.fieldValue02 = selectedOptions.map((option) => option.text).join('/')
      },
      onFinish03({ selectedOptions }) {
        this.show03 = false
        this.fieldValue03 = selectedOptions.map((option) => option.text).join('/')
        if (selectedOptions[2].value === '113') this.show_other2 = true
        else {
          this.show_other2 = false
          this.value_cascader2 = ''
        }
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
      },
      addInput() {
        if (this.day >= 7) {
          return
        } else {
          this.days.push('术后引流液淀粉酶(第' + ++this.day + '天)')
        }
      },

      cancelBtn() {
        this.$router.back() //返回添加界面或者编辑界面
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
      if (this.surgery.surgery_ssfs === '其他') this.show_other1 = true
      if (this.surgery.surgery_ycwhfs === '有胰肠吻合/吻合方式/其他')
        this.show_other2 = true
      this.fieldValue01 = this.surgery.surgery_ssfs
      this.value_cascader1 = this.surgery.surgery_ssfs_other
      this.fieldValue02 = this.surgery.surgery_sstj
      this.fieldValue03 = this.surgery.surgery_ycwhfs
      this.value_cascader2 = this.surgery.surgery_ycwhfs_other
      this.fieldValue04 = this.surgery.surgery_yczd
      this.value1 = this.surgery.surgery_sssj
      this.value2 = this.surgery.surgery_szcx
      this.value3 = this.surgery.surgery_sxl
      this.fieldValue05 = this.surgery.surgery_mjmzh
      this.fieldValue06 = this.surgery.surgery_POPF
      this.fieldValue07 = this.surgery.surgery_DGE
      this.fieldValue08 = this.surgery.surgery_PPH
      this.fieldValue09 = this.surgery.surgery_dl
      this.fieldValue10 = this.surgery.surgery_rml
      this.fieldValue11 = this.surgery.surgery_fqgr
      this.fieldValue12 = this.surgery.surgery_VTEorPE
      this.fieldValue13 = this.surgery.surgery_yylccyl
      this.fieldValue14 = this.surgery.surgery_fjhecss
      this.fieldValue15 = this.surgery.surgery_wsqsw
      this.value4 = this.surgery.surgery_shzyts
      this.value5 = this.surgery.surgery_shylydfm
      //展示所有淀粉酶记录
      while (this.day < this.value5.length) {
        this.days.push('术后引流液淀粉酶(第' + ++this.day + '天)')
      }
    },
    updated() {
      this.$emit(
        'saveSurgery',
        this.fieldValue01,
        this.value_cascader1, //其他选项中的值
        this.fieldValue02,
        this.fieldValue03,
        this.value_cascader2, //其他选项中的值
        this.fieldValue04,
        this.value1,
        this.value2,
        this.value3,
        this.fieldValue05,
        this.fieldValue06,
        this.fieldValue07,
        this.fieldValue08,
        this.fieldValue09,
        this.fieldValue10,
        this.fieldValue11,
        this.fieldValue12,
        this.fieldValue13,
        this.fieldValue14,
        this.fieldValue15,
        this.value4,
        this.value5
      )
    }
  }
</script>

<style scoped>
  .submit_btn{
    border: none;
    border-radius: 30px !important;
    background-color: white;
    width: 25px !important;
    height: 30px !important;
  }
  .van-field__control {
    text-align: right !important;
  }
  .van-button--round {
    border-radius: 10px;
    background: #913935;
    border: #913935;
  }

  .van-button {
    height: 44px;
  }
</style>
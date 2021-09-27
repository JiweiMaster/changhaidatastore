 <template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="zlsm"
          label="肿瘤数目
        （个）"
          placeholder="正整数"
          input-align="right"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="zdzj"
          label="最大直径（cm） "
          placeholder="保留1位小数"
          input-align="right"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue01"
          is-link
          readonly
          label="囊壁结节"
          @click="show01 = true"
        />
        <van-popup v-model="show01" position="bottom">
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
          label="单多囊"
          @click="show02 = true"
        />
        <van-popup v-model="show02" position="bottom">
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
          label="囊壁强化"
          @click="show03 = true"
        />
        <van-popup v-model="show03" position="bottom">
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
          label="钙化"
          @click="show04 = true"
        />
        <van-popup v-model="show04" position="bottom">
          <van-cascader
            v-model="cascaderValue04"
            :options="options04"
            @close="show04 = false"
            @finish="onFinish04"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue05"
          is-link
          readonly
          label="实性成分"
          @click="show05 = true"
        />
        <van-popup v-model="show05" position="bottom">
          <van-cascader
            v-model="cascaderValue05"
            :options="options05"
            @close="show05 = false"
            @finish="onFinish05"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue06"
          is-link
          readonly
          label="远端胰腺萎缩"
          @click="show06 = true"
        />
        <van-popup v-model="show06" position="bottom">
          <van-cascader
            v-model="cascaderValue06"
            :options="options06"
            @close="show06 = false"
            @finish="onFinish06"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue07"
          is-link
          readonly
          label="远端胰管扩张"
          @click="show07 = true"
        />
        <van-popup v-model="show07" position="bottom">
          <van-cascader
            v-model="cascaderValue07"
            :options="options07"
            @close="show07 = false"
            @finish="onFinish07"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue08"
          is-link
          readonly
          label="胰腺周围渗出"
          @click="show08 = true"
        />
        <van-popup v-model="show08" position="bottom">
          <van-cascader
            v-model="cascaderValue08"
            :options="options08"
            @close="show08 = false"
            @finish="onFinish08"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue09"
          is-link
          readonly
          label="与主胰管相通"
          @click="show09 = true"
        />
        <van-popup v-model="show09" position="bottom">
          <van-cascader
            v-model="cascaderValue09"
            :options="options09"
            @close="show09 = false"
            @finish="onFinish09"
          />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="zygzj"
          label="主胰管直径
        （mm）"
          placeholder="保留1位小数"
          input-align="right"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="fieldValue10"
          is-link
          readonly
          label="所属期相"
          @click="show10 = true"
        />
        <van-popup v-model="show10" position="bottom">
          <van-cascader
            v-model="cascaderValue10"
            :options="options10"
            @close="show10 = false"
            @finish="onFinish10"
          />
        </van-popup>
      </van-cell-group>

      <div style="margin-top: 5px; width: 90vw; text-align: right">
        <van-uploader
          v-model="fileList"
          :after-read="afterRead"
          :max-count="4"
        />
      </div>

      <van-cell-group>
        <van-field
          v-model="message1"
          rows="2"
          autosize
          label="影像科诊断："
          type="textarea"
          maxlength="200"
          show-word-limit
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="message2"
          rows="2"
          autosize
          label="胰腺外科术前诊断："
          type="textarea"
          maxlength="200"
          show-word-limit
        />
      </van-cell-group>
    </div>
    <!--          提交的按钮-->
    <div style="display: flex; justify-content: center; margin-top: 50px">
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
    name: 'ImageComponent.vue',
    data() {
      return {
        zlsm: '',
        zdzj: '',
        zygzj: '',
        message1: '',
        message2: '',

        show01: false,
        fieldValue01: '',
        cascaderValue01: '',
        options01: [
          { text: '无', value: '100' },
          {
            text: '有',
            value: '200',
            children: [
              { text: '有囊壁结节', value: '210' },
              { text: '伴强化/有囊壁结节', value: '220' },
              { text: '无强化', value: '230' }
            ]
          }
        ],

        show02: false,
        fieldValue02: '',
        cascaderValue02: '',
        options02: [
          { text: '单囊', value: '100' },
          { text: '多囊', value: '200' }
        ],

        show03: false,
        fieldValue03: '',
        cascaderValue03: '',
        options03: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show04: false,
        fieldValue04: '',
        cascaderValue04: '',
        options04: [
          { text: '无', value: '100' },
          {
            text: '有',
            value: '200',
            children: [
              { text: '有钙化', value: '210' },
              { text: '位于囊壁/有钙化', value: '220' },
              { text: '位于肿瘤内部分隔/有钙化', value: '230' },
              { text: '位于肿瘤内实性部分', value: '240' }
            ]
          }
        ],

        show05: false,
        fieldValue05: '',
        cascaderValue05: '',
        options05: [
          { text: '无', value: '100' },
          {
            text: '有',
            value: '200',
            children: [
              { text: '有实性成分', value: '210' },
              { text: '伴强化/有实性成分', value: '220' },
              { text: '无强化', value: '230' }
            ]
          }
        ],

        show06: false,
        fieldValue06: '',
        cascaderValue06: '',
        options06: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show07: false,
        fieldValue07: '',
        cascaderValue07: '',
        options07: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show08: false,
        fieldValue08: '',
        cascaderValue08: '',
        options08: [
          { text: '无', value: '100' },
          { text: '有', value: '200' }
        ],

        show09: false,
        fieldValue09: '',
        cascaderValue09: '',
        options09: [
          { text: '是', value: '100' },
          { text: '否', value: '200' },
          { text: '无法判断', value: '300' }
        ],

        show10: false,
        fieldValue10: '',
        cascaderValue10: '',
        options10: [
          { text: '平扫相', value: '100' },
          { text: '动脉相', value: '200' },
          { text: '门静脉相', value: '300' },
          { text: '延迟相', value: '400' }
        ],

        images: {
          100: '',
          200: '',
          300: '',
          400: ''
        },

        fileList: []
      }
    },
    props: { id: String },
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
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file)
        this.images[this.cascaderValue10] = file.content
        console.log(this.images)
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
      uploadBtn() {}
    },
    updated() {
      this.$emit(
        'saveImages',
        this.zlsm,
        this.zdzj,
        this.fieldValue01,
        this.fieldValue02,
        this.fieldValue03,
        this.fieldValue04,
        this.fieldValue05,
        this.fieldValue06,
        this.fieldValue07,
        this.fieldValue08,
        this.fieldValue09,
        this.zygzj,
        this.fieldValue10,
        this.fileList[0],
        this.message1,
        this.message2
      )
    }
  }
</script>

<style>
</style>
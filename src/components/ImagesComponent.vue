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
        <van-cell
          is-link
          close-on-click-action="true"
          title="囊壁结节"
          @click="showNbjjChoice = true"
        />
        <van-action-sheet
          v-model="showNbjjChoice"
          :round="false"
          :actions="nbjj"
          @select="onSelectNbjj"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="单多囊"
          @click="showDdnChoice = true"
        />
        <van-action-sheet
          v-model="showDdnChoice"
          :round="false"
          :actions="ddn"
          @select="onSelectDdn"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="囊壁强化"
          @click="showNbqhChoice = true"
        />
        <van-action-sheet
          v-model="showNbqhChoice"
          :round="false"
          :actions="nbqh"
          @select="onSelectNbqh"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="钙化"
          @click="showGhChoice = true"
        />
        <van-action-sheet
          v-model="showGhChoice"
          :round="false"
          :actions="gh"
          @select="onSelectGh"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="实性成分"
          @click="showSxcfChoice = true"
        />
        <van-action-sheet
          v-model="showSxcfChoice"
          :round="false"
          :actions="sxcf"
          @select="onSelectSxcf"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="远端胰腺萎缩"
          @click="showYdyxwsChoice = true"
        />
        <van-action-sheet
          v-model="showYdyxwsChoice"
          :round="false"
          :actions="ydyxws"
          @select="onSelectYdyxws"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="远端胰管扩张"
          @click="showYdygkzChoice = true"
        />
        <van-action-sheet
          v-model="showYdygkzChoice"
          :round="false"
          :actions="ydygkz"
          @select="onSelectYdygkz"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="胰腺周围渗出"
          @click="showYxzwscChoice = true"
        />
        <van-action-sheet
          v-model="showYxzwscChoice"
          :round="false"
          :actions="yxzwsc"
          @select="onSelectYxzwsc"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-cell
          is-link
          close-on-click-action="true"
          title="与主胰管相通"
          @click="showYzygxtChoice = true"
        />
        <van-action-sheet
          v-model="showYzygxtChoice"
          :round="false"
          :actions="yzygxt"
          @select="onSelectYzygxt"
        ></van-action-sheet>
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="zlsm"
          label="主胰管直径
        （mm）"
          placeholder="保留1位小数"
          input-align="right"
        />
      </van-cell-group>

      <van-cell-group>
        <van-cell is-link title="所属期相" @click="showSsqxChoice = true" />
        <van-action-sheet
          v-model="showSsqxChoice"
          :round="false"
          :actions="ssqx"
          @select="onSelectSsqx"
        ></van-action-sheet>
      </van-cell-group>

      <div style="margin-top: 5px; width: 90vw; text-align: right">
        <van-uploader
          v-model="fileList"
          :after-read="afterRead"
          multiple
          :max-count="1"
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
    name: 'ImageComponent.vue',
    data() {
      return {
        showNbjjChoice: false,
        showDdnChoice: false,
        showNbqhChoice: false,
        showGhChoice: false,
        showSxcfChoice: false,
        showYdyxwsChoice: false,
        showYdygkzChoice: false,
        showYxzwscChoice: false,
        showYzygxtChoice: false,
        showSsqxChoice: false,
        message1: '',

        nbjj: [
          { name: '无' },
          { name: '有囊壁结节' },
          { name: '伴强化/有囊壁结节' },
          { name: '无强化' }
        ],
        ddn: [{ name: '单囊' }, { name: '多囊' }],
        nbqh: [{ name: '无' }, { name: '有' }],
        gh: [
          { name: '无' },
          { name: '有钙化' },
          { name: '位于囊壁/有钙化' },
          { name: '位于肿瘤内部分隔/有钙化' },
          { name: '位于肿瘤内实性部分' }
        ],
        sxcf: [
          { name: '无' },
          { name: '有实性成分' },
          { name: '伴强化/有实性成分' },
          { name: '无强化' }
        ],
        ydyxws: [{ name: '无' }, { name: '有' }],
        ydygkz: [{ name: '无' }, { name: '有' }],
        yxzwsc: [{ name: '无' }, { name: '有' }],
        yzygxt: [{ name: '是' }, { name: '否' }, { name: '无法判断' }],
        ssqx: [
          { name: '平扫相' },
          { name: '动脉相' },
          { name: '门静脉相' },
          { name: '延迟相' }
        ],
        fileList: []
      }
    },
    methods: {
      onSelectNbjj() {
        this.showNbjjChoice = false
        // Toast(item.name)
      },
      onSelectDdn() {
        this.showDdnChoice = false
      },
      onSelectNbqh() {
        this.showNbqhChoice = false
      },
      onSelectGh() {
        this.showGhChoice = false
      },
      onSelectSxcf() {
        this.showSxcfChoice = false
      },
      onSelectYdyxws() {
        this.showYdyxwsChoice = false
      },
      onSelectYdygkz() {
        this.showYdygkzChoice = false
      },
      onSelectYxzwsc() {
        this.showYxzwscChoice = false
      },
      onSelectYzygxt() {
        this.showYzygxtChoice = false
      },
      onSelectSsqx() {
        this.showSsqxChoice = false
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file)
      }
    }
  }
</script>

<style>
  /* .van-field__label {
      width: 15em !important;
    } */
</style>
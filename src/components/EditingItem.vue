<template>
  <div style="margin: 5vw; border-top: 1px solid rgba(0, 0, 0, 0.1)">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      "
      v-for="(item, index) in patientInfo"
      :key="index"
    >
      <div style="float: left">
        <p class="id">住院号：{{ item.baseHospitalNum }}</p>
        <p>
          基本信息：{{ item.basePatientName }}，{{
            item.basePatientGender == '1' ? '男' : '女'
          }}，{{ item.basePatientAge }}
        </p>
        <p>病理信息：{{ item.pathology_blzd }}</p>
      </div>
      <div>
        <van-button class="btn" type="info" size="small" @click="editItem(item)"
          >编辑</van-button
        >
        <van-button
          class="btn"
          type="info"
          size="small"
          @click="uploadItem(item)"
          >上传</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  export default {
    name: 'EditingItem',
    props: {
      msg: String
    },
    data() {
      return {
        patientInfo: []
      }
    },
    methods: {
      editItem(item) {
        let id = item.baseHospitalNum
        this.$router.push({ path: '/BaseInfo', query: { id: id } })
      },
      uploadItem(item) {
        if (
          item.baseHospitalNum != '' &&
          item.basePatientName != '' &&
          item.basePatientGender != '' &&
          item.basePatientAge != '' &&
          item.pathology_blzd != ''
        ) {
          Dialog.confirm({
            title: '是否上传？'
          })
            .then(() => {
              console.log('上传' + item)
              localStorage.removeItem(item.baseHospitalNum)
              this.$router.push('/DataManage/UploadedItem')
            })
            .catch(() => {})
        } else
          Dialog.alert({
            message: '基本信息或病理信息不完整，请完善信息!'
          }).then(() => {})
      }
    },

    created() {
      localStorage.removeItem('')
      localStorage.removeItem('loglevel:webpack-dev-server')
      this.patientInfo.length = 0
      for (let i = 0; i < localStorage.length; i++) {
        let temp = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if (temp.pathology_blzd_other != '')
          //如果是其他需要展示其他中输入的信息，不会影响localstorage中的存储
          temp.pathology_blzd = temp.pathology_blzd_other
        if (temp.pathology_blzd == '胰腺导管内乳头状粘液性瘤（IPMN）')
          temp.pathology_blzd =
            temp.pathology_blzd +
            '[' +
            temp.pathology_blzd_IPMN_1 +
            ';' +
            temp.pathology_blzd_IPMN_2 +
            ']'
        this.patientInfo.unshift(temp)
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 0.5em;
  }
  .id {
    font-size: 0.7em;
    font-weight: bold;
  }
  .btn {
    margin: 2vw;
  }
</style>
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
      <div style="float: left; width: 60vw">
        <p class="id">住院号：{{ item.baseHospitalNum }}</p>
        <p>
          基本信息：{{ item.basePatientName }}，{{
            item.basePatientGender == '1'
              ? '男'
              : item.basePatientGender == '2'
              ? '女'
              : ''
          }}，{{ item.basePatientAge }}
        </p>
        <p>病理信息：{{ item.pathology_blzd }}</p>
      </div>
      <div>
        <van-button class="btn" type="info" size="mini" @click="editItem(item)"
          >编辑</van-button
        >
        <van-button
          class="btn"
          type="info"
          size="mini"
          @click="uploadItem(item)"
          >上传</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  import axios from 'axios'

  const uploadDataUrl = 'http://localhost:8080/upload_all_data/'
  // const uploadDataUrl = 'http://duolingo.cmitnb.top:8003/upload_all_data/'

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
          ((item.pathology_blzd != '' &&
            item.pathology_blzd != '其他' &&
            item.pathology_blzd != '胰腺导管内乳头状粘液性瘤(IPMN)') ||
            (item.pathology_blzd == '其他' && item.pathology_blzd_other != '') ||
            (item.pathology_blzd == '胰腺导管内乳头状粘液性瘤(IPMN)' &&
              item.pathology_blzd_IPMN_1 != '' &&
              item.pathology_blzd_IPMN_2 != ''))
        ) {
          Dialog.confirm({
            title: '是否上传？'
          })
            .then(() => {
              console.log('上传' + item)
              // let all_data = JSON.stringify(item)
              let all_data = localStorage.getItem(item.baseHospitalNum)
              let form_data = new FormData()
              form_data.append('all_data', all_data)
              axios
                .post(uploadDataUrl, form_data, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                })
                .then(
                  (response) => {
                    console.log('上传结果', response.data)
                    localStorage.removeItem(item.baseHospitalNum)
                    this.$router.push('/DataManage/UploadedItem')
                  },
                  (error) => {
                    console.log('上传失败', error.message)
                  }
                )
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
        if (temp.pathology_blzd == '胰腺导管内乳头状粘液性瘤(IPMN)')
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
    font-size: 14px;
    padding: 0px;
    margin: 3px;
  }
  .id {
    font-size: 14px;
    font-weight: 550;
  }
  .btn {
    margin: 2vw;
  }
  .van-button--info {
    padding: 5px;
    background-color: #913935;
    border: #913935;
    border-radius: 5px;
  }
</style>
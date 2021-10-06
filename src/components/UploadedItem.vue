<template>
  <div style="margin: 5vw; border-top: 1px solid rgba(0, 0, 0, 0.1)">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      "
      v-for="(item, index) in briefPatientInfo"
      :key="index"
      @click="displayAllData(item[0])"
    >
      <div style="float: left">
        <p class="id">住院号：{{ item[0] }}</p>
        <p>
          基本信息：{{ item[3] }}，{{
            item[2] == '1' ? '男' : item[2] == '2' ? '女' : ''
          }}，{{ item[1] }}
        </p>
        <p>病理信息：{{ item[4] }}</p>
      </div>
    </div>
    <div style="margin-top: 100px">
      <van-loading size="24px" vertical v-if="isShowLoading"
        >加载中...</van-loading
      >
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  // const getDataUrl = 'http://localhost:8080/query_patient_info/'
  const getDataUrl = 'http://duolingo.cmitnb.top:8003/query_patient_info/'
  const queryDataUrl = 'http://duolingo.cmitnb.top:8003/query_info_by_patientid/'

  export default {
    name: 'UploadedItem',
    data() {
      return {
        briefPatientInfo: [],
        isShowLoading: true
      }
    },
    methods: {
      displayAllData(id) {
        if (this.isShowLoading === true) return
        this.isShowLoading = true
        let formData = new FormData()
        formData.append('baseHospitalNum', id)
        axios.post(queryDataUrl, formData).then(
          (response) => {
            console.log('获取结果', response.data)
            let data = JSON.stringify(response.data.data)
            localStorage.setItem(id, data)
            this.isShowLoading = false
            this.$router.push({
              path: '/BaseInfo',
              query: { id: id, readOnly: true }
            })
          },
          (error) => {
            console.log('获取失败', error.message)
            this.isShowLoading = false
          }
        )
      }
    },
    created() {
      this.briefPatientInfo.length = 0
      axios.get(getDataUrl).then(
        (response) => {
          console.log('获取结果', response.data.ret)
          this.isShowLoading = false
          if (response.data.ret.length != 'undefined') {
            for (let i = 0; i < response.data.ret.length; i++) {
              let temp = response.data.ret[i]
              if (temp[5] != '') temp[4] = temp[5]
              if (temp[4] == '胰腺导管内乳头状粘液性瘤(IPMN)')
                temp[4] = temp[4] + '[' + temp[6] + ';' + temp[7] + ']'
              this.briefPatientInfo.unshift(temp)
            }
          }
        },
        (error) => {
          console.log('获取失败', error.message)
        }
      )
    }
  }
</script>

<style scoped>
  p {
    font-size: 14px;
    padding: 0px;
    margin: 4px;
  }
  .id {
    font-size: 14px;
    font-weight: 550;
  }
  .btn {
    margin: 3vw;
  }
</style>
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
  </div>
</template>

<script>
  import axios from 'axios'

  const getDataUrl = 'http://localhost:8080/query_patient_info/'

  export default {
    name: 'UploadedItem',
    data() {
      return {
        briefPatientInfo: []
      }
    },
    created() {
      this.briefPatientInfo.length = 0
      axios.get(getDataUrl).then(
        (response) => {
          console.log('获取结果', response.data.ret)
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
    font-size: 0.5em;
  }
  .id {
    font-size: 0.7em;
    font-weight: bold;
  }
  .btn {
    margin: 3vw;
  }
</style>
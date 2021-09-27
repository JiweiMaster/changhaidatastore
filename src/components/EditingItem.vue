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
          基本信息：{{ item.basePatientName }}，{{ item.basePatientGender }}，{{
            item.basePatientAge
          }}
        </p>
        <p>病理信息：{{ item.pathology_blzd }}</p>
      </div>
      <div>
        <van-button class="btn" type="info" size="small" @click="editItem"
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
      editItem() {},
      uploadItem(item) {
        if (
          item.baseHospitalNum != '' &&
          item.basePatientName != '' &&
          item.basePatientGender != '' &&
          item.basePatientAge != '' &&
          item.pathology_blzd != ''
        )
          console.log('上传' + item)
      }
    },
    computed: {
      filterData() {
        console.log(this.patientInfo)
        let item = [{ id: '', name: '', gender: '', age: '', pathological: '' }]
        for (let i = 0; i < this.patientInfo.length; i++) {
          item[i].id = this.patientInfo[i].baseHospitalNum
          item[i].name = this.patientInfo[i].basePatientName
          item[i].gender = this.patientInfo[i].basePatientGender
          item[i].age = this.patientInfo[i].basePatientAge
          if (this.patientInfo[i].pathology_blzd_other != '')
            item[i].pathological = this.patientInfo[i].pathology_blzd_other
          else item[i].pathological = this.patientInfo[i].pathology_blzd
        }
        console.log(item)
        return item
      }
    },
    mounted() {
      localStorage.removeItem('')
      localStorage.removeItem('loglevel:webpack-dev-server')
      this.patientInfo.length = 0
      for (let i = 0; i < localStorage.length; i++) {
        let temp = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if (temp.pathology_blzd_other != '')
          temp.pathology_blzd = temp.pathology_blzd_other
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
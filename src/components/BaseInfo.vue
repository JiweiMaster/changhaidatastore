<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="基本"
        ><BaseComponent
          @saveBase="handleSaveBase"
          @saveItem="handleSave"
          @uploadItem="handleUpload"
          :id="this.base.baseHospitalNum"
          :base="this.base"
          :disable="this.disable"
      /></van-tab>
      <van-tab title="化验"
        ><AnalysisComponent
          @saveAnalysis="handleSaveAnalysis"
          @saveItem="handleSave"
          @uploadItem="handleUpload"
          :id="this.base.baseHospitalNum"
          :analysis_prop="this.analysis"
          :disable="this.disable"
      /></van-tab>
      <van-tab title="影像"
        ><ImagesComponent
          @saveImages="handleSaveImages"
          @saveItem="handleSave"
          @uploadItem="handleUpload"
          :id="this.base.baseHospitalNum"
          :images="this.images"
          :disable="this.disable"
      /></van-tab>
      <van-tab title="手术"
        ><SurgeryComponent
          @saveSurgery="handleSaveSurgery"
          @saveItem="handleSave"
          @uploadItem="handleUpload"
          :id="this.base.baseHospitalNum"
          :surgery="this.surgery"
          :disable="this.disable"
      /></van-tab>
      <van-tab title="病理"
        ><PathologyComponent
          @savePathology="handleSavePathology"
          @saveItem="handleSave"
          @uploadItem="handleUpload"
          :id="this.base.baseHospitalNum"
          :pathology="this.pathology"
          :disable="this.disable"
      /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  import axios from 'axios'

  // const uploadDataUrl = 'http://localhost:8080/upload_all_data/'
  const uploadDataUrl = 'http://duolingo.cmitnb.top:8003/upload_all_data/'

  import BaseComponent from './BaseComponent'
  import AnalysisComponent from './AnalysisComponent'
  import ImagesComponent from './ImagesComponent'
  import SurgeryComponent from './SurgeryComponent'
  import PathologyComponent from './PathologyComponent'

  export default {
    name: 'BaseInfo.vue',
    components: {
      BaseComponent,
      AnalysisComponent,
      ImagesComponent,
      SurgeryComponent,
      PathologyComponent
    },
    data() {
      return {
        active: 0,
        disable: false, //决定子组件是否禁止编辑

        base: {
          baseHospitalNum: '',
          basePatientName: '',
          basePatientAge: '',
          basePatientGender: ''
        },

        analysis: {
          analysis_WBC: '',
          analysis_NEU: '',
          analysis_LYM: '',
          analysis_Hb: '',
          analysis_PLT: '',
          analysis_TBIL: '',
          analysis_ALB: '',
          analysis_FBG: '',
          analysis_HbA1c: '',
          analysis_CRE: '',
          analysis_CHOL: '',
          analysis_TG: '',
          analysis_AFP: '',
          analysis_CEA: '',
          analysis_CA199: '',
          analysis_CA125: '',
          analysis_CA724: '',
          analysis_IgG4: ''
        },

        images: {
          images_zlsm: '',
          images_zdzj: '',
          images_nbjj: '',
          images_ddn: '',
          images_nbqh: '',
          images_gh: '',
          images_sxcf: '',
          images_ydyxws: '',
          images_ydygkz: '',
          images_yxzwsc: '',
          images_yzygxt: '',
          images_zygzj: '',
          images_ssqx: '',
          images_picture: [],
          images_yxkzd: '',
          images_yxwksqzd: '',

          qx_image_num: { 平扫相: 0, 动脉相: 0, 门静脉相: 0, 延迟相: 0 }
        },

        surgery: {
          surgery_ssfs: '',
          surgery_ssfs_other: '',
          surgery_sstj: '',
          surgery_ycwhfs: '',
          surgery_ycwhfs_other: '',
          surgery_yczd: '',
          surgery_sssj: '',
          surgery_szcx: '',
          surgery_sxl: '',
          surgery_mjmzh: '',
          surgery_POPF: '',
          surgery_DGE: '',
          surgery_PPH: '',
          surgery_dl: '',
          surgery_rml: '',
          surgery_fqgr: '',
          surgery_VTEorPE: '',
          surgery_yylccyl: '',
          surgery_fjhecss: '',
          surgery_wsqsw: '',
          surgery_shzyts: '',
          surgery_shylydfm: []
        },

        pathology: {
          pathology_blzd: '',
          pathology_blzd_IPMN_1: '',
          pathology_blzd_IPMN_2: '',
          pathology_blzd_other: '',
          pathology_zdzj: '',
          pathology_yxcd: '',
          pathology_qyzdysyx: '',
          pathology_mgqf: '',
          pathology_yzzfjr: '',
          pathology_dxgqf: '',
          pathology_zlbjs: '',
          pathology_yxlbjs: '',
          pathology_qtzqzy: '',
          pathology_Ki67: '',
          pathology_qtbz: ''
        }
      }
    },
    methods: {
      handleSave() {
        let temp = {
          ...this.base,
          ...this.analysis,
          ...this.images,
          ...this.surgery,
          ...this.pathology
        }
        localStorage.removeItem(this.base.baseHospitalNum) //ios系统可能需要先移除之前的项
        if (this.$route.query.id != this.base.baseHospitalNum)
          localStorage.removeItem(this.$route.query.id)
        localStorage.setItem(this.base.baseHospitalNum, JSON.stringify(temp))
      },

      handleSaveBase(hospitalNum, patientName, patientAge, patientGender) {
        this.base.baseHospitalNum = hospitalNum
        this.base.basePatientName = patientName
        this.base.basePatientAge = patientAge
        this.base.basePatientGender = patientGender
      },
      handleSaveAnalysis(analysis) {
        this.analysis.analysis_WBC = analysis.value01
        this.analysis.analysis_NEU = analysis.value02
        this.analysis.analysis_LYM = analysis.value03
        this.analysis.analysis_Hb = analysis.value04
        this.analysis.analysis_PLT = analysis.value05
        this.analysis.analysis_TBIL = analysis.value06
        this.analysis.analysis_ALB = analysis.value07
        this.analysis.analysis_FBG = analysis.value08
        this.analysis.analysis_HbA1c = analysis.value09
        this.analysis.analysis_CRE = analysis.value10
        this.analysis.analysis_CHOL = analysis.value11
        this.analysis.analysis_TG = analysis.value12
        this.analysis.analysis_AFP = analysis.value13
        this.analysis.analysis_CEA = analysis.value14
        this.analysis.analysis_CA199 = analysis.value15
        this.analysis.analysis_CA125 = analysis.value16
        this.analysis.analysis_CA724 = analysis.value17
        this.analysis.analysis_IgG4 = analysis.value18
      },
      handleSaveImages() {
        this.images.images_zlsm = arguments[0]
        this.images.images_zdzj = arguments[1]
        this.images.images_nbjj = arguments[2]
        this.images.images_ddn = arguments[3]
        this.images.images_nbqh = arguments[4]
        this.images.images_gh = arguments[5]
        this.images.images_sxcf = arguments[6]
        this.images.images_ydyxws = arguments[7]
        this.images.images_ydygkz = arguments[8]
        this.images.images_yxzwsc = arguments[9]
        this.images.images_yzygxt = arguments[10]
        this.images.images_zygzj = arguments[11]
        this.images.images_ssqx = arguments[12]
        this.images.images_picture = arguments[13]
        this.images.images_yxkzd = arguments[14]
        this.images.images_yxwksqzd = arguments[15]

        this.images.qx_image_num = arguments[16]
      },
      handleSaveSurgery() {
        this.surgery.surgery_ssfs = arguments[0]
        this.surgery.surgery_ssfs_other = arguments[1]
        this.surgery.surgery_sstj = arguments[2]
        this.surgery.surgery_ycwhfs = arguments[3]
        this.surgery.surgery_ycwhfs_other = arguments[4]
        this.surgery.surgery_yczd = arguments[5]
        this.surgery.surgery_sssj = arguments[6]
        this.surgery.surgery_szcx = arguments[7]
        this.surgery.surgery_sxl = arguments[8]
        this.surgery.surgery_mjmzh = arguments[9]
        this.surgery.surgery_POPF = arguments[10]
        this.surgery.surgery_DGE = arguments[11]
        this.surgery.surgery_PPH = arguments[12]
        this.surgery.surgery_dl = arguments[13]
        this.surgery.surgery_rml = arguments[14]
        this.surgery.surgery_fqgr = arguments[15]
        this.surgery.surgery_VTEorPE = arguments[16]
        this.surgery.surgery_yylccyl = arguments[17]
        this.surgery.surgery_fjhecss = arguments[18]
        this.surgery.surgery_wsqsw = arguments[19]
        this.surgery.surgery_shzyts = arguments[20]
        this.surgery.surgery_shylydfm = arguments[21]
      },
      handleSavePathology() {
        this.pathology.pathology_blzd = arguments[0]
        this.pathology.pathology_blzd_IPMN_1 = arguments[1]
        this.pathology.pathology_blzd_IPMN_2 = arguments[2]
        this.pathology.pathology_blzd_other = arguments[3]
        this.pathology.pathology_zdzj = arguments[4]
        this.pathology.pathology_yxcd = arguments[5]
        this.pathology.pathology_qyzdysyx = arguments[6]
        this.pathology.pathology_mgqf = arguments[7]
        this.pathology.pathology_yzzfjr = arguments[8]
        this.pathology.pathology_dxgqf = arguments[9]
        this.pathology.pathology_zlbjs = arguments[10]
        this.pathology.pathology_yxlbjs = arguments[11]
        this.pathology.pathology_qtzqzy = arguments[12]
        this.pathology.pathology_Ki67 = arguments[13]
        this.pathology.pathology_qtbz = arguments[14]
        // this.$options.methods.uploadToLocal.bind(this)()
      },
      handleUpload() {
        if (
          this.base.baseHospitalNum != '' &&
          this.base.basePatientName != '' &&
          this.base.basePatientGender != '' &&
          this.base.basePatientAge != '' &&
          ((this.pathology.pathology_blzd != '' &&
            this.pathology.pathology_blzd != '其他' &&
            this.pathology.pathology_blzd != '胰腺导管内乳头状粘液性瘤(IPMN)') ||
            (this.pathology.pathology_blzd == '其他' &&
              this.pathology.pathology_blzd_other != '') ||
            (this.pathology.pathology_blzd == '胰腺导管内乳头状粘液性瘤(IPMN)' &&
              this.pathology.pathology_blzd_IPMN_1 != '' &&
              this.pathology.pathology_blzd_IPMN_2 != ''))
        ) {
          Dialog.confirm({
            title: '是否上传？'
          })
            .then(() => {
              console.log('上传') //先调用handleSave把数据放在localstorage中
              this.handleSave()
              let all_data = localStorage.getItem(this.base.baseHospitalNum)
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
                    localStorage.removeItem(this.base.baseHospitalNum)
                    this.$router.replace('/DataManage/UploadedItem')
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
      },

      fetchData() {
        if (this.$route.query.id != null) {
          let id = this.$route.query.id
          let temp = JSON.parse(localStorage.getItem(id))
          this.base.baseHospitalNum = temp.baseHospitalNum
          this.base.basePatientName = temp.basePatientName
          this.base.basePatientAge = temp.basePatientAge
          this.base.basePatientGender = temp.basePatientGender

          this.analysis.analysis_WBC = temp.analysis_WBC
          this.analysis.analysis_NEU = temp.analysis_NEU
          this.analysis.analysis_LYM = temp.analysis_LYM
          this.analysis.analysis_Hb = temp.analysis_Hb
          this.analysis.analysis_PLT = temp.analysis_PLT
          this.analysis.analysis_TBIL = temp.analysis_TBIL
          this.analysis.analysis_ALB = temp.analysis_ALB
          this.analysis.analysis_FBG = temp.analysis_FBG
          this.analysis.analysis_HbA1c = temp.analysis_HbA1c
          this.analysis.analysis_CRE = temp.analysis_CRE
          this.analysis.analysis_CHOL = temp.analysis_CHOL
          this.analysis.analysis_TG = temp.analysis_TG
          this.analysis.analysis_AFP = temp.analysis_AFP
          this.analysis.analysis_CEA = temp.analysis_CEA
          this.analysis.analysis_CA199 = temp.analysis_CA199
          this.analysis.analysis_CA125 = temp.analysis_CA125
          this.analysis.analysis_CA724 = temp.analysis_CA724
          this.analysis.analysis_IgG4 = temp.analysis_IgG4

          this.images.images_zlsm = temp.images_zlsm
          this.images.images_zdzj = temp.images_zdzj
          this.images.images_nbjj = temp.images_nbjj
          this.images.images_ddn = temp.images_ddn
          this.images.images_nbqh = temp.images_nbqh
          this.images.images_gh = temp.images_gh
          this.images.images_sxcf = temp.images_sxcf
          this.images.images_ydyxws = temp.images_ydyxws
          this.images.images_ydygkz = temp.images_ydygkz
          this.images.images_yxzwsc = temp.images_yxzwsc
          this.images.images_yzygxt = temp.images_yzygxt
          this.images.images_zygzj = temp.images_zygzj
          this.images.images_ssqx = temp.images_ssqx
          this.images.images_picture = temp.images_picture
          this.images.images_yxkzd = temp.images_yxkzd
          this.images.images_yxwksqzd = temp.images_yxwksqzd
          this.images.qx_image_num = temp.qx_image_num

          this.surgery.surgery_ssfs = temp.surgery_ssfs
          this.surgery.surgery_ssfs_other = temp.surgery_ssfs_other
          this.surgery.surgery_sstj = temp.surgery_sstj
          this.surgery.surgery_ycwhfs = temp.surgery_ycwhfs
          this.surgery.surgery_ycwhfs_other = temp.surgery_ycwhfs_other
          this.surgery.surgery_yczd = temp.surgery_yczd
          this.surgery.surgery_sssj = temp.surgery_sssj
          this.surgery.surgery_szcx = temp.surgery_szcx
          this.surgery.surgery_sxl = temp.surgery_sxl
          this.surgery.surgery_mjmzh = temp.surgery_mjmzh
          this.surgery.surgery_POPF = temp.surgery_POPF
          this.surgery.surgery_DGE = temp.surgery_DGE
          this.surgery.surgery_PPH = temp.surgery_PPH
          this.surgery.surgery_dl = temp.surgery_dl
          this.surgery.surgery_rml = temp.surgery_rml
          this.surgery.surgery_fqgr = temp.surgery_fqgr
          this.surgery.surgery_VTEorPE = temp.surgery_VTEorPE
          this.surgery.surgery_yylccyl = temp.surgery_yylccyl
          this.surgery.surgery_fjhecss = temp.surgery_fjhecss
          this.surgery.surgery_wsqsw = temp.surgery_wsqsw
          this.surgery.surgery_shzyts = temp.surgery_shzyts
          this.surgery.surgery_shylydfm = temp.surgery_shylydfm

          this.pathology.pathology_blzd = temp.pathology_blzd
          this.pathology.pathology_blzd_IPMN_1 = temp.pathology_blzd_IPMN_1
          this.pathology.pathology_blzd_IPMN_2 = temp.pathology_blzd_IPMN_2
          this.pathology.pathology_blzd_other = temp.pathology_blzd_other
          this.pathology.pathology_zdzj = temp.pathology_zdzj
          this.pathology.pathology_yxcd = temp.pathology_yxcd
          this.pathology.pathology_qyzdysyx = temp.pathology_qyzdysyx
          this.pathology.pathology_mgqf = temp.pathology_mgqf
          this.pathology.pathology_yzzfjr = temp.pathology_yzzfjr
          this.pathology.pathology_dxgqf = temp.pathology_dxgqf
          this.pathology.pathology_zlbjs = temp.pathology_zlbjs
          this.pathology.pathology_yxlbjs = temp.pathology_yxlbjs
          this.pathology.pathology_qtzqzy = temp.pathology_qtzqzy
          this.pathology.pathology_Ki67 = temp.pathology_Ki67
          this.pathology.pathology_qtbz = temp.pathology_qtbz
          if (this.$route.query.readOnly == 'true') {
            this.disable = true
            localStorage.removeItem(temp.baseHospitalNum)
          }
        }
      }
    },

    created() {
      this.fetchData()
    }
  }
</script>

<style>
  .input_div {
    margin-top: 5px;
    width: 90vw;
    height: 30px;
    border-radius: 4px;
    border: solid 1px lightgray;
    padding-left: 10px;
  }
  .van-radio__icon--checked .van-icon {
    background-color: #913935;
    border-color: #913935;
  }
  .van-tabs__line {
    background-color: #fff;
  }
  .van-tabs__nav {
    background-color: #913935;
  }
  .van-tab {
    color: #fff !important;
  }
</style>
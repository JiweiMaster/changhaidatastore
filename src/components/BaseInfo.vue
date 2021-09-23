<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="基本"
        ><BaseComponent @saveBase="handleSaveBase"
      /></van-tab>
      <van-tab title="化验"
        ><AnalysisComponent @saveAnalysis="handleSaveAnalysis"
      /></van-tab>
      <van-tab title="影像"
        ><ImagesComponent @saveImages="handleSaveImages"
      /></van-tab>
      <van-tab title="手术"
        ><SurgeryComponent @saveSurgery="handleSaveSurgery"
      /></van-tab>
      <van-tab title="病理"
        ><PathologyComponent @savePathology="handleSavePathology"
      /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
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
          images_picture: '',
          images_yxkzd: '',
          images_yxwksqzd: ''
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
      handleSaveBase(hospitalNum, patientName, patientAge, patientGender) {
        this.base.baseHospitalNum = hospitalNum
        this.base.basePatientName = patientName
        this.base.basePatientAge = patientAge
        this.base.basePatientGender = patientGender

        let temp = {
          ...this.base,
          ...this.analysis,
          ...this.images,
          ...this.surgery,
          ...this.pathology
        }
        localStorage.setItem(hospitalNum, JSON.stringify(temp))
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

        let temp = {
          ...this.base,
          ...this.analysis,
          ...this.images,
          ...this.surgery,
          ...this.pathology
        }

        localStorage.setItem(this.base.baseHospitalNum, JSON.stringify(temp))
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

        let temp = {
          ...this.base,
          ...this.analysis,
          ...this.images,
          ...this.surgery,
          ...this.pathology
        }

        localStorage.setItem(this.base.baseHospitalNum, JSON.stringify(temp))
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
        this.surgery.surgery_shylydfm[0] = arguments[21]

        let temp = {
          ...this.base,
          ...this.analysis,
          ...this.images,
          ...this.surgery,
          ...this.pathology
        }

        localStorage.setItem(this.base.baseHospitalNum, JSON.stringify(temp))
      },
      handleSavePathology() {
        this.pathology.pathology_blzd = arguments[0]
        this.pathology.pathology_blzd_other = arguments[1]
        this.pathology.pathology_zdzj = arguments[2]
        this.pathology.pathology_yxcd = arguments[3]
        this.pathology.pathology_qyzdysyx = arguments[4]
        this.pathology.pathology_mgqf = arguments[5]
        this.pathology.pathology_yzzfjr = arguments[6]
        this.pathology.pathology_dxgqf = arguments[7]
        this.pathology.pathology_zlbjs = arguments[8]
        this.pathology.pathology_yxlbjs = arguments[9]
        this.pathology.pathology_qtzqzy = arguments[10]
        this.pathology.pathology_Ki67 = arguments[11]
        this.pathology.pathology_qtbz = arguments[12]

        let temp = {
          ...this.base,
          ...this.analysis,
          ...this.images,
          ...this.surgery,
          ...this.pathology
        }

        localStorage.setItem(this.base.baseHospitalNum, JSON.stringify(temp))
      }
    }
  }
</script>

<style>
  .input_div {
    margin-top: 5px;
    width: 300px;
    height: 30px;
    border-radius: 4px;
    border: solid 1px lightgray;
    padding-left: 10px;
  }
  .van-button--round {
    border-radius: 30px !important;
  }

  .van-button {
    height: 44px !important;
  }
  /*.van-tabs__nav{*/
  /*  background-color: #fff;*/
  /*}*/
  .van-radio__icon--checked .van-icon {
    background-color: #913935;
    border-color: #913935;
  }

  .van-tabs__line {
    background-color: #fff !important;
  }

  .van-tabs__nav {
    background-color: #913935 !important;
  }

  .van-tab {
    color: #fff;
  }
</style>
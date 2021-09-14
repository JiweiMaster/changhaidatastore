<template>
  <div class="data-manage">
    <van-nav-bar title="病例数据录入" fixed></van-nav-bar>
    <van-divider />
    <data-item
      v-for="(item, index) in filterData"
      :key="index"
      :info="item"
    ></data-item>
    <change-state @change="handleChangeState"></change-state>
  </div>
</template>

<script>
  import ChangeState from './com/ChangeState.vue'
  import DataItem from './com/DataItem.vue'
  export default {
    name: 'DataManage',
    data() {
      return {
        patientInfo: [
          {
            id: 'abcd1234',
            name: '张三',
            sex: '男',
            age: 50,
            pathological: 'xxxxx',
            save: true,
            upload: false
          },
          {
            id: 'efgh5678',
            name: '李四',
            sex: '男',
            age: 50,
            pathological: 'xxxxx',
            save: false,
            upload: true
          }
        ],
        state: 'new'
      }
    },
    methods: {
      handleChangeState(state) {
        this.state = state
      }
    },
    computed: {
      filterData() {
        switch (this.state) {
          case 'new':
            return null
          case 'editing':
            return this.patientInfo.filter((item) => item.save == true)
          case 'uploaded':
            return this.patientInfo.filter((item) => item.upload == true)
          default:
            return null
        }
      }
    },
    components: {
      ChangeState,
      DataItem
    }
  }
</script>

<style>
  .van-nav-bar {
    background-color: rgb(72, 157, 236) !important;
  }
  .van-nav-bar__title {
    color: white !important;
  }
</style>
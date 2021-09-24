<template>
  <div style="margin: 5vw; border-top: 1px solid rgba(0, 0, 0, 0.1)">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      "
      v-for="(item, index) in filterData"
      :key="index"
    >
      <div style="float: left">
        <p class="id">住院号：{{ item.id }}</p>
        <p>基本信息：{{ item.name }}，{{ item.sex }}，{{ item.age }}</p>
        <p>病理信息：{{ item.pathological }}</p>
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
        patientInfo: [
          {
            id: 'abcd1234',
            name: '张三',
            sex: '男',
            age: 50,
            pathological: 'xxxxx',
            save: true,
            upload: true
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
        ]
      }
    },
    methods: {},
    computed: {
      filterData() {
        return this.patientInfo.filter((item) => item.upload == true)
      }
    },
    components: {}
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
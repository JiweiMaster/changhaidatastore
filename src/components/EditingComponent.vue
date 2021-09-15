<template>
  <div class="data-manage">
    <van-nav-bar
        title="病例数据录入"
        left-text="返回"
        left-arrow
        @click-left="returnLastPage()"
    />
    <div
        style="margin-top: 70vh; margin-left: 70vw"
        v-if="this.active == 'new'"
    >
      <van-button
          round
          type="info"
          width="3rem"
          height="6rem"
          icon="edit"
          v-on:click="newData()"
      ></van-button>
    </div>
    <div
        class="manage-item"
        style="
        margin: 5vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      "
        v-for="(item, index) in filterData"
        :key="index"
    >
      <div style="float: left">
        <p class="id">住院号：{{ item.id }}</p>
        <p>基本信息：{{ item.name }}，{{ item.sex }}，{{ item.age }}</p>
        <p>病理信息：{{ item.pathological }}</p>
      </div>
      <div>
        <van-button
            class="btn"
            type="info"
            size="small"
            v-if="item.upload == false"
        >编辑</van-button
        >
        <van-button
            class="btn"
            type="info"
            size="small"
            v-if="item.upload == false"
        >上传</van-button
        >
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="add-o" name="new">新建</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" name="editing"
      >编辑中</van-tabbar-item
      >
      <van-tabbar-item icon="passed" name="uploaded">已上传</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'EditingComponent',
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
      active: 'new'
    }
  },
  methods: {
    returnLastPage() {
      console.log('返回到上一个界面...')
    },
    newData() {
      console.log('new 一个新的病例数据' + this.href)
      this.$root.currentRoute = '/BaseInfo'
    }
  },
  computed: {
    filterData() {
      switch (this.active) {
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
  components: {}
}
</script>

<style>
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
.van-button {
  padding: 0 13px !important;
  font-size: 14px !important;
}
.van-nav-bar {
  background-color: #913935 !important;
}
.van-nav-bar .van-icon {
  color: #fff !important;
}
.van-nav-bar__text {
  color: #fff !important;
}
.van-nav-bar__title {
  color: #fff !important;
}
.van-button--info {
  background-color: #913935 !important;
  border: 1px solid #913935 !important;
}
.van-tabbar-item--active {
  color: #913935 !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
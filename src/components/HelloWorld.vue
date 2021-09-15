<template>
  <div>
    <van-nav-bar
        title="病例数据录入"
        left-text="返回"
        left-arrow
        @click-left="returnLastPage()"
    />
    <div style="margin-top: 70vh; margin-left: 70vw">
      <van-button round type="info" width="3rem" height="3rem" icon="edit" v-on:click="newData()"></van-button>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="add-o">新建</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o">编辑</van-tabbar-item>
      <van-tabbar-item icon="passed">已上传</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: String
  },
  data() {
    return {
      active: 0
    }
  },
  methods:{
    returnLastPage(){
      console.log('返回到上一个界面...')
    },
    newData(){
      console.log('new 一个新的病例数据'+this.href)
      this.$root.currentRoute = '/BaseInfo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.van-button{
  padding: 0 13px !important;
  font-size: 14px !important;
}

.van-nav-bar{
  background-color: #913935 !important;
}
.van-nav-bar .van-icon{
  color: #fff !important;
}
.van-nav-bar__text{
  color: #fff !important;
}
.van-nav-bar__title{
  color: #fff !important;
}
.van-button--info{
  background-color: #913935 !important;
  border: 1px solid #913935 !important;
}
.van-tabbar-item--active{
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

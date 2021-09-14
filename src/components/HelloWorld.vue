<template>
  <div>
    <van-nav-bar
        title="病例数据录入"
        left-text="返回"
        left-arrow
        @click-left="returnLastPage()"
    />
    <div style="margin-top: 70vh; margin-left: 60vw">
      <van-image
          round
          width="3rem"
          height="3rem"
          :src="require('./icon_edit.png')"
      />
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/*.van-nav-bar{*/
/*  background-color: #913935 !important;*/
/*}*/
/*.van-nav-bar .van-icon{*/
/*  color: #fff !important;*/
/*}*/
/*.van-nav-bar__text{*/
/*  color: #fff !important;*/
/*}*/
/*.van-nav-bar__title{*/
/*  color: #fff !important;*/
/*}*/
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

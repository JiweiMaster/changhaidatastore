<template>
  <div>
    <van-nav-bar
      title="病例数据录入"
      left-text="返回"
      left-arrow
      @click-left="returnLastPage()"
    />
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item to="/DataManage/AddItem" icon="add-o">新建</van-tabbar-item>
      <van-tabbar-item to="/DataManage/EditingItem" icon="todo-list-o">编辑中</van-tabbar-item>
      <van-tabbar-item to="/DataManage/UploadedItem" icon="passed">已上传</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import AddItem from "./AddItem";
import EditingItem from "./EditingItem";
import UploadedItem from "./UploadedItem";
  export default {
    name: 'DataManage',
    comments:{
      AddItem,EditingItem,UploadedItem
    },
    methods: {
      returnLastPage() {
        this.$router.push('/')
      },
      NewCreate(){

      },
      Editing(){

      },
      Uploading(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  .van-tabbar-item--active {
    color: #913935 !important;
  }
  .van-field__label{
    width: 15em;
  }
  span{
    font-size: 15px;
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

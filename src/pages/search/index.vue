<template>
  <div id="searchContainer">
    <div class="header">
      <input @confirm="handleConfirm" confirm-type="搜索" v-model="searchContent" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span @click="clearContent" v-show="searchContent" class="clearContent">X</span>
    </div>
    <div v-if="booksList.length">
      <BooksList :booksList="booksList" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import request from '../../utils/request'
// 引入图书列表，复用组件
import BooksList from '../booksList/index.vue'
  export default {
    // 注册组件
    components:{
      BooksList
    },
    data() {
      return {
        // 输入的内容
        searchContent:'',
        // 定义初始数据
        booksList:[]
      }
    },
    methods: {
      // 清除输入内容事件
      clearContent (){
        this.searchContent = ''
      },
      // 点击搜索发送请求获取数据列表
      async handleConfirm (){
        // 1.手机用户输入的数据
        let searchContent = this.searchContent
        // 2.根据用户输入的内容发送请求获取对应的图书列表
        /* wx.request({
          // 完整路径
          url: 'http://localhost:3699/searchBooks',
          // 必须为req字段，并以对象形式传
          data: { req:searchContent },
          success:(res) => {
            console.log(res.data);
          },
          fail:() => {
            console.log('获取失败');
          },
        }) */
        this.booksList = await request('/searchBooks',{ req:searchContent })
        // console.log(result);
      },
    },
  }
</script>

<style lang="stylus" scoped>
  #searchContainer
    .header
      width 75%
      height 60rpx
      border-bottom 3rpx solid #1FB08D
      margin 30rpx auto
      position relative
      input
        width 100%
        height 100%
      /deep/.placeholder 
          color #1FB08D
          text-align center
          font-size 24rpx
      .clearContent
        position absolute
        right 0
        top 0
        line-height 60rpx
        z-index 3

          
 
</style>

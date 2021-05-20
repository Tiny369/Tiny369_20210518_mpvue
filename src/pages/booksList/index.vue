<template>
  <div id="booksListContainer">
   <!--  <div class="bookItem">
      <img class="bookImg" src="/static/imgs/firstView/nvsheng.jpg" alt="">
      <div class="bookInfo">
        <p>追风筝的人</p>
        <p>作者：反间谍法换</p>
        <p>出版社：各地方该罚</p>
      </div>
      <p class="bookPrice">¥55.55</p>
    </div> -->
    <div class="bookItem" v-for="(item,index) in booksList" :key="index">
      <img class="bookImg" :src="item.image" alt="">
      <div class="bookInfo">
        <p>{{item.title}}</p>
        <p>{{item.author}}</p>
        <p>{{item.publisher}}</p>
      </div>
      <p class="bookPrice">{{item.price}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 接收组件传来的数据
    props:{
      booksList:{
        required:true,
        type:Array,
        default:[]
      }
    },
    data() {
      return {
        booksList:[]
      }
    },
    mounted() {
      if(this.$mp){
        // 解析Url传过来的数据
        let booksList = JSON.parse(this.$mp.query.booksList)
        // 保存至data
        this.booksList = booksList
      }
    },
  }
</script>

<style lang="stylus" scoped>
  #booksListContainer
    .bookItem
      display flex
      padding 15rpx
      border-bottom 1rpx solid pink
      .bookImg
        width 140rpx
        height 150rpx
        margin-right 30rpx
      .bookInfo 
        width 70%
        font-size 30rpx
        line-height 50rpx
      .bookPrice
        font-size 35rpx
        color red
        font-weight bold
      
 
</style>

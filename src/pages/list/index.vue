<template>
  <div id="listContainer">
    <swiper indicator-dots indicator-color="pink" indicator-active-color="green">
      <swiper-item v-for="(books,index) in newArr" :key="index">
        <img :src="books.image" alt="">
      </swiper-item>
     <!--  <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item> -->
    </swiper>
    <div class="booksContainer">
     <div class="header">
        <span>全部商品</span>
        <span class="more"> > </span>
     </div>
     <ul class="booksList">
       <li class="booksItem" v-for="(books,index) in booksList" :key="index">
         <img :src="books.image" alt="">
         <p>《{{books.title}}》</p>
         <p>{{books.author}}</p>
       </li>
       <!-- <li class="booksItem">
         <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
         <p>《渺小的人》</p>
         <p>tiny</p>
       </li>
       <li class="booksItem">
         <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
         <p>《渺小的人》</p>
         <p>tiny</p>
       </li>
       <li class="booksItem">
         <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
         <p>《渺小的人》</p>
         <p>tiny</p>
       </li> -->
     </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import booksList from './datas/data.json'
// console.log(booksList,typeof booksList);
  export default {
    data() {
      return {
        // 图书列表数据
        booksList:[]
      }
    },
    mounted() {
      this.booksList = booksList
    },
    computed: {
      newArr (){
        // 拆包不会影响原数组
        return [...this.booksList].splice(0,4)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  #listContainer
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 100%
    .booksContainer
      .header
        padding 15rpx
        .more
          float right
          color #7FCAB3
          font-size 35rpx 
      .booksList
        display flex
        flex-wrap wrap
        .booksItem
          width 50%
          display flex
          flex-direction column
          align-items center
          border-bottom 1rpx solid pink
          box-sizing border-box
          &:nth-child(2n+1)
            border-right 1rpx solid yellowgreen
          img
            width 200rpx
            height 200rpx
            margin 20rpx
          p
            font-size 27rpx
            line-break 40rpx
      
 
</style>

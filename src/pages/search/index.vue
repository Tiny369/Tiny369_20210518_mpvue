<template>
  <div id="searchContainer">
    <div class="header">
      <input v-model="searchContent" type="text" placeholder="书中自有黄金屋" placeholder-class="placeholder">
      <span @click="clearContent" v-show="searchContent" class="clearContent">X</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        // 输入的内容
        searchContent:''
      }
    },
    methods: {
      clearContent (){
        this.searchContent = ''
      },
    },
  }
</script>

<style lang="stylus" >
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
       .placeholder 
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

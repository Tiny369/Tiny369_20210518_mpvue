<template>
  <div id="firstViewContainer">
    <swiper :indicator-dots="index!==3" indicator-color="green" indicator-active-color="red" @change="handelChange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button class="btn" v-show="index===3">开始体验</button>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        index:0
      }
    },
    methods: {
      handelChange (e){
        this.index = e.mp.detail.current
      }
    },
  }
</script>

<style lang="stylus" scoped>
  #firstViewContainer
    width  100%
    height  100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      width 300rpx
      height 100rpx
      background-color rgba(0,0,0,0.6)
      color white
      position absolute
      bottom 20rpx
      left 50%
      transform translateX(-50%)

</style>

<template>
  <div id="personalContainer">
    <div class="head">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo" class="btn">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        // 用户信息
        userInfo:{}
      }
    },
    mounted() {
      wx.getUserProfile({
        success:(res) => {
          this.userInfo =  res.userInfo
        },
        fail:() => {
          console.log('获取失败');
        },
      })
    },
    methods: {
      // 获取用户信息授权
      handleGetUserInfo (res){
        if(res.mp.detail.userInfo){
          this.userInfo = res.mp.detail.userInfo
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  #personalContainer
    .head
      padding 45rpx
      background-color #02A774
      img 
        width 100rpx
        height 100rpx
        margin-right 35rpx
        vertical-align middle
        border-radius 50%
      .btn
        display inline-block
        height 60rpx
        line-height 60rpx
        background-color rgba(0,0,0,0.4)
        color #eee
        font-size 28rpx
        vertical-align middle
        max-width 150rpx
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
 
</style>

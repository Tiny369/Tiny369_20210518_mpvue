
<script type="text/ecmascript-6">
import request from './utils/request'
  export default {
    mounted() {
      // 获取code临时凭证
      wx.login({
        success: async (res) => {
          console.log(res);
          let code = res.code
          // 发送请求（之前封装过，引入使用）
          let token = await request('/getOpenId',{ code })
          console.log('服务器返回的数据：',token);
          // 将获取到的token保存到本地存储
          wx.setStorage({
            key:'token',
            data:token
          })
        },
        fail:() => {
          console.log('code临时凭证获取失败');
        }
      })
    },
  }
</script>

<style lang="stylus" >
  page 
    width 100%
    height 100%
  
</style>

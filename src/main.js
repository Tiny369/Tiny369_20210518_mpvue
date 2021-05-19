import Vue from 'vue'
import App from './App'

// 关闭提示信息（生产环境）
Vue.config.productionTip = false
// 声明App组件是代表整个应用 application
App.mpType = 'app'

// 生成实例
const app = new Vue(App)

// 挂载实例应用
app.$mount()

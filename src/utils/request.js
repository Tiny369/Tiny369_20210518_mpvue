
import config from './config.js'

export default function (url,data={},method='GET'){

    return new Promise((resolve,reject) => {
        // 1.初始化实例对象的状态为pending 初始化
        // 2.执行异步任务
        wx.request({
            url: config.host + url,
            data,
            method,
            success:(res) => {
            //   console.log(res.data);
              resolve(res.data)
            // 3.根据异步任务结果动态修改promise对象的状态：成功resolve || 失败reject
              resolve(res.data) // 当实例对象的状态为成功以后会通知await，异步成功了，await就会方向后续代码的执行
            },
            fail:() => {
            //   console.log('获取失败');
              reject()
            },
        })
    })
    
}
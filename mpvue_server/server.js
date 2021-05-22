let Koa = require('koa')
let KoaRouter = require('koa-router')
let jwt = require('jsonwebtoken');
let Fly = require("flyio/src/node")
let fly = new Fly

// 生成应用
let app = new Koa()
let router = new KoaRouter()

let datas = require('./datas/data.json') 
const { json } = require('express')
// 搜索图书的接口
router.get('/searchBooks',(ctx,next) => {
    // ctx.body = 'tiny'

    // 1.获取用户参数
    let req = ctx.query.req
    console.log('获取的参数：',req);
    // 2.处理请求数据

    // 3.返回响应数据
    ctx.body = datas
    
})

// 获取openId
router.get('/getOpenId',async (ctx,next) => {
    // 1.准备数据 code,appid,appsecret
    let appId = 'wxa2416a3ec9429cae'
    let appSecret = 'b272cd9054d8b50cb8a342987928d163'
    let code = ctx.query.code

    // 2.发送请求同微信服务器端
    let URL = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
    let response = await fly.get(URL)
    // console.log(response.data);
       /*  .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }); */

    // 3.返回响应数据
    let openId = JSON.parse(response.data).openid
    console.log('编译前：',openId);

    // 使用jsonwebtoken对openId加密生成token字段，并返回
    let token = jwt.sign(openId,'serverTestKey');
    // console.log('token：',token);

    // 对token进行反编译
    let testId = jwt.verify(token, 'serverTestKey');
    console.log('编译后：',testId);

    // ctx.body = 123
    // ctx.body = response.data
    ctx.body = token

})

// 声明使用
app.use(router.routes())
app.use(router.allowedMethods())

app.listen('3699',() => {
    console.log('服务器启动成功');
    console.log('服务器地址：http://localhost:3699');
})
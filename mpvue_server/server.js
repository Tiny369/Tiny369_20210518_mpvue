let Koa = require('koa')
let KoaRouter = require('koa-router')

// 生成应用
let app = new Koa()
let router = new KoaRouter()

let datas = require('./datas/data.json') 
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

// 声明使用
app.use(router.routes())
app.use(router.allowedMethods())

app.listen('3699',() => {
    console.log('服务器启动成功');
    console.log('服务器地址：http://localhost:3699');
})
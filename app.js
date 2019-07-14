const express = require('express');
const stuRouter = require('./routers/student')
const userRouter = require('./routers/user')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))
app.use('/public/', express.static(path.join(__dirname, './public')))

app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())


app.use(stuRouter);
app.use(userRouter);

// 配置一个处理 404 的中间件
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        msg: 'Not Found'
    })
})

// 配置一个全局错误处理中间件
app.use((err, req, res, next) => {
    console.log('err:', err)
    res.status(500).json({
        code: 500,
        msg: 'server err'
    })
})

app.listen(80, () => {
    console.log('server start...')
})
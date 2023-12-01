const express = require('express');

const app = express();

app.get('/home',(req, res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('网站首页')
})

app.get('/',(req, res)=>{
    res.send('我才是真正的首页')
})

app.post('/login',(req, res)=>{
    res.send('登录成功')
})

app.all('/search',(req, res)=>{ // 匹配所有的请求方式
    res.send('1秒钟为您找到相关结果 1000 0000条')
})

app.all('*',(req, res)=>{ // 匹配所有的请求方式
    res.send('404')
})



app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})
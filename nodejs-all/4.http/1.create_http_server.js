//1. 导入http模块
const http = require('http');
//2. 创建server服务
const server = http.createServer((req, res) => {

    res.end('hello http server')
})

//3.监听端口 启动服务
server.listen(9000, () => {
    console.log('server is running at http://localhost:9000')
})


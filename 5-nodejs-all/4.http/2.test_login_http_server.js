const http = require('http');

const server = http.createServer((req, res)=>{
    let {url, method} = req;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    if(url === '/login' && method === 'GET' || url === '/') {
        res.end('登录页面');
    } else if(url === '/register' && method === 'GET') {
        res.end('注册页面');
    }else {
        res.end('<h1>404 not found</h1>');
    }
});

server.listen(9000, ()=>{
    console.log('server is running at http://localhost:9000')
})
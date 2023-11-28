const fs = require('fs');

// fs.mkdir('./demo',err => {
//     if(err) throw err;
//     console.log('创建文件夹成功')
// })

// 递归异步创建
fs.mkdir('./demo/demo1/demo2/demo3',{recursive: true}, err => {
    if(err) throw err;
    console.log('创建文件夹成功')
})


// fs.mkdirSync('./demo/demo1/demo2/demo3/demo4',{recursive: true})
//

// fs.readdir('./demo', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// })
//
// fs.readdirSync('./demo')

fs.rmdir('./demo/demo1/demo2/demo3',{recursive :true}, err => {
    if (err) throw err;
    console.log('删除文件夹成功')
})

fs.rmdirSync('./demo/demo1/demo2/demo3/demo4',{recursive :true})
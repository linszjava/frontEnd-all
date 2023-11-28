const fs = require('fs');

// 1. 创建文件
fs.writeFile('./2.txt','222',(err)=>{
    if(err) throw err;
    console.log('创建文件成功')
})

//2. 文件删除
// fs.unlink('./2.txt',err => {
//     if (err) throw err;
//     console.log('删除文件成功')
// })

// 3. 文件删除 同步
fs.unlinkSync('./2.txt')
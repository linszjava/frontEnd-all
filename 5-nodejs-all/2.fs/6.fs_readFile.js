const fs = require('fs');

// fs 异步读取文件
// fs.readFile('./fs_writeFile.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//     console.log(data)
// })

// fs 同步读取文件
let data = fs.readFileSync('fs_writeFile.txt', 'utf8');
console.log(data.toString());
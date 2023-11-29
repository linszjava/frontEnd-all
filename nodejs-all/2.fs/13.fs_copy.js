const fs =  require = require('fs');

fs.copyFile('./1.txt', './2.txt', (err) => {
    if (err) throw err;
    console.log('复制文件成功')
})


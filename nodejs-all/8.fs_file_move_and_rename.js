const fs = require('fs');
//
// fs.rename('./fs_createWriteStream.txt', './stream.txt', (err) => {
//     if (err) throw err;
//     console.log('重命名完成');
// })

fs.renameSync('./stream.txt', './stream1.txt')
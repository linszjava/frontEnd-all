const fs = require('fs');
// 写入是覆盖写入
// fs.writeFile('./fs_writeFile.txt', 'hello linsz ha', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

// fs 同步写入
// try {
//     fs.writeFileSync('./fs_writeFile.txt', '三人行，必有我师焉')
// }catch (e) {
//     console.log(e)
// }

// 追加写入
// fs.appendFile('./fs_writeFile.txt', '三人行，必有我师焉\t\t', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// })
//
// // fs 同步追加写入
// fs.appendFileSync('./fs_writeFile.txt', '温故而知新, 可以为师矣\t\t')
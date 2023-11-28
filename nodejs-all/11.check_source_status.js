// 查看资源状态
const fs = require('fs');

fs.stat('./demo', (err, stats) => {
    if (err) throw err;
    console.log(stats);
    console.log(`文件属性: ${JSON.stringify(stats)}`);
    console.log(`文件是否为文件(isFile): ${stats.isFile()}`);
    console.log(`文件是否为目录(isDirectory): ${stats.isDirectory()}`);
    console.log(`文件是否为块设备(isBlockDevice): ${stats.isBlockDevice()}`);
    console.log(`文件是否为字符设备(isCharacterDevice): ${stats.isCharacterDevice()}`);
    console.log(`文件是否为软连接(isSymbolicLink): ${stats.isSymbolicLink()}`);
    console.log(`文件是否为FIFO(isFIFO): ${stats.isFIFO()}`);
    console.log(`文件是否为Socket(isSocket): ${stats.isSocket()}`);
})

//同步
let data = fs.statSync('./demo');
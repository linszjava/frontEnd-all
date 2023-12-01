const path = require('path');

console.log(path.sep); // 获取当前系统的路径分隔符
console.log(path.delimiter); // 获取当前系统的环境变量分隔符
console.log(path.basename('/Users/linsz/Documents/vscode/frontEnd-all/5-nodejs-all/3.path/1.path.js')); // 获取文件名

//拼接绝对路径
console.log(path.resolve(__dirname, 'test'));
//解析路径
let pathname = 'D:/program file/nodejs/node.exe';
console.log(path.parse(pathname));
//获取路径基础名称
console.log(path.basename(pathname))

//获取路径的目录名
console.log(path.dirname(pathname));

//获取路径的扩展名
console.log(path.extname(pathname));
// 使用async await 实现读取三个文件内容并打印

const fs = require('fs')
const util = require('util')
 const mineReadFile = util.promisify(fs.readFile)

async function main(){
    let data1 = await mineReadFile('./1.txt')
    let data2 = await mineReadFile('./2.txt')
    let data3 = await mineReadFile('./3.txt')
    console.log(data1.toString() + data2.toString() + data3.toString())
}

main()


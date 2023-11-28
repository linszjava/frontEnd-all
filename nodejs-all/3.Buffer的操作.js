//buffer 与字符串的转换
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_4.toString());// utf-8

let buf_5 = Buffer.from('hello linsz');
console.log(buf_5.toString())

// // 修改buffer中的内容
// buf_5[0] = 221
// console.log(buf_5.toString())
console.log(buf_5)
// 溢出
buf_5[0] = 300                        //300(10进制)  1  0010 1100  最高位1直接丢失 0010 1100 => 44
console.log(buf_5)     // 68  0110 1000 被换成300  => 2c   0010 1100 ==> 44
console.log(buf_5.toString())

// 中文
let buf_6 = Buffer.from('你好')  //<Buffer e4 bd a0 e5 a5 bd>  一个汉字占三个字节
console.log(buf_6)
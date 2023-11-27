// buffer的创建的三种方式
// 1.通过长度创建
let buf = Buffer.alloc(10)
// console.log(buf)

// 2. allocUnsafe
let buf1 = Buffer.allocUnsafe(100)
// console.log(buf1)


//3. from
let buf2 = Buffer.from('hello linsz')
console.log(buf2)

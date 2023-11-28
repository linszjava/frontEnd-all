const fs = require('fs');
let rs = fs.createReadStream('./fs_createWriteStream.txt');

rs.on('data',data =>{
    console.log(data.toString())
})

rs.on('end',()=>{
    console.log('已经读取完毕')
})

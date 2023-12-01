const util = require('util');
const fs = require('fs');

let minieReadFile = util.promisify(fs.readFile);

minieReadFile('./1.txt').then(value => {
        console.log(value.toString())
},reason => {
        console.log(reason)
})
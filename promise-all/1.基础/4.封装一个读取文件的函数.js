function minieReadFile(path) {
    return new Promise ((resolve, reject) => {
        const fs = require('fs');
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

minieReadFile('./1.txt').then(value => {
    console.log(value.toString())
}, reason => {
    console.log(reason)
})


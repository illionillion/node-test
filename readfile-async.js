const fs = require('fs');

function readFileEX (fname) {
    return new Promise((resolve,reject) => {
        fs.readFile(fname,'utf-8',(err,data) => {
            resolve(data)
        })
    })
}

async function readAll() {
    const a = await readFileEX('package-list.txt')
    console.log(a);
    const b = await readFileEX('package-list.txt')
    console.log(b);

}
readAll();
const fs = require('fs');

fs.readFile('test-data.json','utf-8',(err,data) => {
    console.log(data);
})
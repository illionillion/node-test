const fs = require('fs');
// ファイルの読み込み
fs.readFile('README.md','utf-8',function (err,data) {
    // 読み込みが完了したときの処理
    console.log(data); 
})
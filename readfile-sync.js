const fs = require('fs');

// 同期的にファイルを読み込む
const data = fs.readFileSync('./project_a/package.json','utf-8');
console.log(data);

// 非同期でファイルを読み込む
fs.readFile('./project_a/package.json','utf-8',readHandler);
// 読み込みが終了したときの処理
function readHandler(err,data) {
    console.log(data);
}
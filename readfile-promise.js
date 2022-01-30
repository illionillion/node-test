const fs = require('fs');
// Promiseを返す関数を定義
function readFile_pr(fname) {
    return new Promise((resolve) => {
        fs.readFile(fname,'utf-8',(err,s) => {
            resolve(s);
        })
    })
}

// 順にファイルを読み込む
readFile_pr('package-list.txt').then((text) => {
    console.log('package-list.txtを読み込み完了',text);
    return readFile_pr('README.md')
}).then((text)=>{
    console.log('README.mdを読み込み完了',text);
    return readFile_pr('project_a/package.json')
}).then((text) => {
    console.log('package.jsonを読み込み',text);
})
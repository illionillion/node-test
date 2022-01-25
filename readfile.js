"use strict";
// ファイルを非同期で読み込む
const fs=require('fs');

// ファイル読み込み
fs.readFile('test-data.json','utf-8',fileLoaded);

// 読み込みが完了したときのイベント
function fileLoaded(err,data){
    if (err) {
        console.log('読み込み失敗');
        return;
    }
    console.log('読み込み成功');
    // console.log(data);

    // 読み込むファイルがJSONだった場合
    data=JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        
    }
}
"use strict";
// ユーザーからのキーボード入力を取得する Promise を生成する
function readUserInput(question){
    const readline=require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });

    return new Promise((resolve,reject)=>{
        readline.question(question,(answer)=>{
            resolve(answer);
            readline.close();
        })
    })
}

// メイン処理
(async function main() {
    const name=await readUserInput('あなたの名前は？');
    // console.log('Hello, '+name+'!');
    console.log(`Hello, ${name}!`);
    for (let i = 0; i < name.length; i++) {
        // console.log(`index:${i}\nvalue:${name[i]}`)
        console.log(name[i]);
    }
})();
"use strict";
const readline=require('readline').createInterface({//入力を受け付けるやつ
    input:process.stdin,
    output:process.stdout
})

readline.question('あなたの名前は？',(answer)=>{
    // console.log('Hello, '+answer+'!');
    console.log(`Hello, ${answer}!`);
    for (let i = 0; i < answer.length; i++) {
        console.log(answer[i]);
    }
})

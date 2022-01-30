const fs = require('fs')

// 非同期関数の完了を使って関数の続きを呼ぶ関数
function read_gfn(g, fname) {
    fs.readFile(fname,'utf-8',(err,data)=>{
        g.next(data)
    })
}

// Generator関数を定義
const g = (function * () {
    const a = yield read_gfn(g,'test-data.json')
    console.log(a);
    const b= yield read_gfn(g,'README.md')
    console.log(b);
    const c= yield read_gfn(g,'package-list.txt')
    console.log(c);
})();
g.next();
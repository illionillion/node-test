// httpモジュールを読み込む
const http=require('http')
const ctype={'Content-Type':'text/html;charset=utf-8'}


// Webサーバーを実行
const svr=http.createServer(handler)//サーバーを生成
svr.listen(8081) //ポート8081番で待ち受け開始


/**
 * // サーバーにアクセスがあった時の処理
 * @param {*} req //リスクエスト
 * @param {*} res //レスポンス
 */
function handler(req , res) {

    // URLの判断
    const url=req.url

    // トップページか？
    if (url==='/'||url==='index.html') {
        showIndexPage(req,res)
        return
    }

    // サイコロページか？
    if (url.substr(0,6)==='/dice/') {
        showDicePage(req,res)
        return
    }

    // その他
    res.writeHead(404,ctype);
    res.end('404 not found')

}

// インデックスページにアクセスがあった時
function showIndexPage(req,res) {
    // HTTPAヘッダーを出力
    res.writeHead(200,ctype)
    // レスポンスの本体を出力
    const html = '<h1 style="color:blue;">サイコロページの案内</h1>\n'+
    '<p><a href="/dice/6">6面体のサイコロ</a></p>'+
    '<p><a href="/dice/12">12面体のサイコロ</a></p>'
    res.end(html);
}

// サイコロページにアクセスがあった時
function showDicePage(req,res) {
    // HTTPAヘッダーを出力
    res.writeHead(200,ctype)
    // 何面体のサイコロが必要？
    const a=req.url.split('/')
    const num=parseInt(a[2])
    // 乱数を生成
    const rnd=Math.floor(Math.random() * num) + 1
    // レスポンス本体を出力
    res.end(`<p style="font-size:72px;">${rnd}</p>`)
}
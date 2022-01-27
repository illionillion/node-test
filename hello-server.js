// httpモジュールを読み込む
const http=require('http')

// Webサーバーを実行
const svr=http.createServer(handler)//サーバーを生成
svr.listen(8080) //ポート8080番で待ち受け開始


/**
 * // サーバーにアクセスがあった時の処理
 * @param {*} req //リスクエスト
 * @param {*} res //レスポンス
 */
function handler(req , res) {
    console.log('url:',req.url)
    console.log('method:',req.method)
    // HTTPヘッダー出力
    res.writeHead(200,{'Content-Type':'text/html'})
    // レスポンスの本体を出力
    res.end('<h1 style="color:red;">Hello World</h1>\n')
}

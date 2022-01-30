// 小文字を大文字に変換する
const s = 'Keep On Asking, and It Will Be Given You. '
const r = s.replace(/[a-z]+/g, function (m) {
    return m.toUpperCase();
})
console.log(r);

// 配列の並び替え(降順)
const ar = [100,2,34,53]
ar.sort((a,b)=>{return b-a})
console.log(ar);
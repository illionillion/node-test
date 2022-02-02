// モジュールを取り込む
const keisan = require('./keisan_module.js')

// モジュール関数を使う
console.log(`3 + 5 = ${keisan.add(3,5)}`);
console.log(`4 * 8 = ${keisan.mul(4,8)}`);
"use strict";

var text = "abcdrfgh";
var text2 = "";
for (var i = 0; i < text.length; i++) {
    console.log(i + ":" + text[i]);
    text2 += text[i];
}
console.log(text2);
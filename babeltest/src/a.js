const text="abcdrfgh"
let text2=""
for (let i = 0; i < text.length; i++) {
    console.log(`${i}:${text[i]}`);
    text2+=text[i]
}
console.log(text2);
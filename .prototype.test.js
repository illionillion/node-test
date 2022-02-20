let Obj = {
    "a":0
}

function test(val){
    this.A=val
}

test.prototype={
    plus:function () {
        this.A++;
    }
}

console.log(Obj.a);
let testObj = new test(Obj.a)
testObj.plus()
testObj.plus()
console.log(testObj.A);
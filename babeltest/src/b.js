class Hoge{
    constructor(){
        this.value=100
    }

    fuga(){
        console.log("Hoge.fuga");
        console.log(this.value);
        console.log(this.value**2);
    }
}

const h=new Hoge()
h.fuga() 
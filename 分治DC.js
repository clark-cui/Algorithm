

//递归求和
let a=(b)=>{
    let c=b[0]
    b.shift();

    if(b.length===0){
        return c
    }
    return c+a(b)
}

console.log (a([1,2,3]))


//数组递归求和
let a=(b)=>{
    //边界判断
    if(b.length===0){
        return 0
    }
    //分治思想减少数据规模
    let c=b[0]
    b.shift();
    //基线条件
    if(b.length===0){
        return c
    }
    return c+a(b)
}

console.log (a([1,2,3]))
console.log(a([]))
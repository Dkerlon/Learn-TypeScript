function generic_valores<T>(v:T):T{
    return v
}

function generic_valores2<T,U>(v:T,x:U):T | U{
    return x
}

console.log(generic_valores<number>(20))
console.log(generic_valores2<number,string>(20,"teste"))
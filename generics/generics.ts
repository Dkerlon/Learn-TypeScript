let names: Array<string> = ['Kerlon','Brito','Aragão'];

type DataStore<T> = {
    [props:string]: T 
};

let store: DataStore<string | boolean> = {
    name:'StoreName',
    isOpen: false,
};

function merge<T, U>(a:T,b:T | U ){
    return [a,b];
};

let merge2 = merge(1,2);
merge2[0].toFixed(2);//1,00

let merge3 = merge(1,'kerlon');

function mergeObj<T extends Object>(a:T,b:T){
    return {
        ...a,
        ...b
    };
};

const merged = mergeObj({name:'kerlon'},{age:19});

class User<T>{
    constructor(public id: T){}
}


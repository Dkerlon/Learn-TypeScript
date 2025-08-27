function add(a:number, b:number){
    return a + b;
};

type addFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;
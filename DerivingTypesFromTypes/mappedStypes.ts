type Operations = {
    add: (a: number, b: number) => number,
    sub: (a: number, b: number) => number,
};

type OperationsResult<T extends object> = {
    readonly [key in keyof T]?: number
};

let op: Operations = {
    add(a:number, b: number){
        return a + b
    },
    sub(a:number, b: number){
        return a + b
    }
}

let opResult: OperationsResult<Operations> = {
    add: op.add(1,2),
    sub: op.sub(1,2),
}
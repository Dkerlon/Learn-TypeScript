const userName = 'Max'; // ->> recebe o tipo da string literal
//let username = 'Max' ->> recebe o tipo string
console.log(typeof userName);

type Username = {
    name: string
};

console.log(typeof userName );

let settings = {
    difficulty: 'easy',
    level: 20,
    isStart: false
};

type Settings = typeof settings;

function loadData(settings: Settings){
    //...
};

loadData(settings);

function sum(a: number, b: number): number{
    return a + b
}

function subtract(a: number, b: number): number{
    return a - b
}

type Sum = typeof sum

type Subtract = typeof subtract

function callMethodMath(c: Sum | Subtract, a: number, b: number){
    c(a,b)
}
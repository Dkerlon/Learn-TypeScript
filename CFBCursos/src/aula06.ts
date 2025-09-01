// let numeros: number[] = [20,30,40];
let numeros: Array<number> = [20,30,40];

numeros.push(10); //->> [20,30,40,10]
numeros.unshift(10); //->> [10,20,30,40]

console.log(numeros);

let arrayReadOnly: ReadonlyArray<number> = [100,200,300,400]; //Apenas para leitura
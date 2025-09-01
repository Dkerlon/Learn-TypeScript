//Desestruturação

// let aa,bb,cc,dd
let valores = [0,1,2,3];

let [aa,bb,cc,dd] = valores;
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
const obj = {
    cor: 'Verde',
    cor2: 'Preto',
    cor3: 'Branco'
};
let {cor, cor2, cor3} = obj;

console.log(cor);
console.log(cor2);
console.log(cor3);

let [n1,n2 = 0,...n3] = [10,11,12,1,4,5,7,8,]

function cores(){
    return ['Verde','Preto','Azul','Amarelo']
}

let [c1,c2,c3,c4] = cores()

let texto = "Curso de Typescript"

let [...t] = texto.split('')
console.log(t)
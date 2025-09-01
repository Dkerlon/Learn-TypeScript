// Funções #P2

function soma(n1: number, n2: number = 0): number{
    return n1 + n2;
};

console.log(soma(5));

function novoUser(user:string, pass:string, nome?:string): void{
    console.log(`User ${user}`);
    console.log(`Pass ${pass}`);
    console.log(`Nome ${nome}`);
};


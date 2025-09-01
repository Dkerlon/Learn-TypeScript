function soma(...ns: number[]): number{
    return ns.reduce((oldN, newN) => {
        return oldN + newN;
    })
};

console.log(soma(1,2,3,4,5,6,7,8));
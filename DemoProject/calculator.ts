type investimento = {
    inicialAmount:number,
    annualAmount: number
    duration:number
}

function calculateInvestiment(data : investimento): number{
    let total = data.inicialAmount
    for (let year = 1; year <= data.duration; year++) {
        total += data.annualAmount;
        printResults(total); // Mostra o valor acumulado após cada ano
    }
    return total
}

function printResults(result : number) : void{
    console.log(result)
}

const investimento1: investimento = {
    inicialAmount: 200,
    annualAmount: 100,
    duration: 5
}
const results = calculateInvestiment(investimento1)

console.log(results)

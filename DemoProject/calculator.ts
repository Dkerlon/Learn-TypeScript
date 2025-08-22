type investimento = {
    inicialAmount: number,
    annualAmount: number,
    duration: number
}

function calculateInvestiment(data: investimento): number | string {
    if(data.duration === 0){
        return 'A duração deve ser maior que 0!'
    }
    if(data.annualAmount === 0){
        return 'A contribuição anual deve ser maior que 0!'
    }
    let total = data.inicialAmount;
    console.log(`🏁 Investimento inicial: R$ ${data.inicialAmount.toFixed(2)}\n`);

    for (let year = 1; year <= data.duration; year++) {
        total += data.annualAmount;
        printResults(year, total);
    }

    console.log(`\n📈 Valor final após ${data.duration} anos: R$ ${total.toFixed(2)}`);
    return total;
}

function printResults(year: number, value: number): void {
    console.log(`Ano ${year}: Valor acumulado = R$ ${value.toFixed(2)}`);
}

const investimento1: investimento = {
    inicialAmount: 200,
    annualAmount: 100,
    duration: 5
}

calculateInvestiment(investimento1);
 
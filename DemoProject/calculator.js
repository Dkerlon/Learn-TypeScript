function calculateInvestiment(data) {
    var total = data.inicialAmount;
    for (var year = 1; year <= data.duration; year++) {
        total += data.annualAmount;
        printResults(total); // Mostra o valor acumulado após cada ano
    }
    return total;
}
function printResults(result) {
    console.log(result);
}
var investimento1 = {
    inicialAmount: 200,
    annualAmount: 100,
    duration: 5
};
var results = calculateInvestiment(investimento1);
console.log(results);

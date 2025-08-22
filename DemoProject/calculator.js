function calculateInvestiment(data) {
    var total = data.inicialAmount;
    console.log("\uD83C\uDFC1 Investimento inicial: R$ ".concat(data.inicialAmount.toFixed(2), "\n"));
    for (var year = 1; year <= data.duration; year++) {
        total += data.annualAmount;
        printResults(year, total);
    }
    console.log("\n\uD83D\uDCC8 Valor final ap\u00F3s ".concat(data.duration, " anos: R$ ").concat(total.toFixed(2)));
    return total;
}
function printResults(year, value) {
    console.log("Ano ".concat(year, ": Valor acumulado = R$ ").concat(value.toFixed(2)));
}
var investimento1 = {
    inicialAmount: 200,
    annualAmount: 100,
    duration: 5
};
calculateInvestiment(investimento1);

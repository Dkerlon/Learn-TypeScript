"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    titular;
    numero;
    constructor(titular) {
        this.titular = titular;
        this.numero = this.gerarNumero();
    }
    gerarNumero() {
        return Math.floor(Math.random() * 10000) + 1;
    }
}
class ContaCorrente extends Conta {
    saldo;
    constructor(saldo, titular) {
        super(titular);
        this.saldo = saldo;
    }
}
const novaConta = new ContaCorrente(1, 'Kerlon');
//# sourceMappingURL=aula20a24.js.map
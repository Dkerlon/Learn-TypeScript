//POO, Herança, Getters e Setters

class Conta{
    private numero: number;
    constructor(protected titular:string){
        this.numero = this.gerarNumero()
    }

    gerarNumero(): number{
        return Math.floor(Math.random()*10000) + 1
    }
}

class ContaCorrente extends Conta{
    constructor(private saldo: number,titular: string){
        super(titular);
    }

    get saldoConta(){
        return this.saldo
    }
    get titularConta(){
        return this.titular
    }
    set setSaldoConta(valor: number){
        this.setSaldoConta += valor
    }
}

const novaConta = new ContaCorrente(1,'Kerlon')
console.log(novaConta.saldoConta)
console.log(novaConta.titularConta)
novaConta.setSaldoConta = 750
console.log(novaConta.saldoConta)
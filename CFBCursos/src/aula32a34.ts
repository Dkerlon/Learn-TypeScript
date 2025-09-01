//NameSpaces

namespace Veiculo {
    export enum Cores {
        "Preto",
        "Branco",
        "Vermelho",
        "Amarelo",
        "Azul",
        "Prata"
    }
    abstract class Carro {
        motor:Motores.Motor;
        constructor(protected nome: string, pot: number, turbo?: number){
            this.motor = new Motores.Motor(pot, (turbo ? turbo : 0))
        }
    }

    export class CarroPopular extends Carro {
        private valor: number;
        private marca: string;
        public cor: Cores
        constructor(nome: string, pot: number, valor: number, marca: string,cor:Cores,turbo?: number){
            super(nome,pot,turbo);
            this.valor = valor
            this.marca = marca
            this.cor = cor
        }
    }
}

namespace Motores {
    class Turbo{
        pot: number
        constructor(pot: number){
            this.pot = pot
        }
    }

    export class Motor{
        pot: number;
        turbo: Turbo;

        constructor(pot: number, turbo: number){
            this.pot = pot;
            this.turbo = new Turbo(turbo)
        }
    }
}

const carro = new Veiculo.CarroPopular("Gol",2.0,23000,'Volks',Veiculo.Cores.Branco)
console.log(carro)
console.log(carro.motor.turbo.pot)
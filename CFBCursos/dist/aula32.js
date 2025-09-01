"use strict";
//NameSpaces
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo;
(function (Veiculo) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores = Veiculo.Cores || (Veiculo.Cores = {}));
    class Carro {
        nome;
        motor;
        constructor(nome, pot, turbo) {
            this.nome = nome;
            this.motor = new Motores.Motor(pot, (turbo ? turbo : 0));
        }
    }
    class CarroPopular extends Carro {
        valor;
        marca;
        cor;
        constructor(nome, pot, valor, marca, cor, turbo) {
            super(nome, pot, turbo);
            this.valor = valor;
            this.marca = marca;
            this.cor = cor;
        }
    }
    Veiculo.CarroPopular = CarroPopular;
})(Veiculo || (Veiculo = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        pot;
        turbo;
        constructor(pot, turbo) {
            this.pot = pot;
            this.turbo = new Turbo(turbo);
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro = new Veiculo.CarroPopular("Gol", 2.0, 23000, 'Volks', Veiculo.Cores.Branco);
console.log(carro);
console.log(carro.motor.turbo.pot);
//# sourceMappingURL=aula32.js.map
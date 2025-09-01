"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//POO #P1
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    info() {
        console.log(this.nome);
        console.log(this.ram);
        console.log(this.cpu);
        console.log(this.ligado);
    }
    set altRam(ram) {
        this.ram = ram;
    }
    set altCpu(cpu) {
        this.cpu = cpu;
    }
    set altLigado(ligado) {
        this.ligado = ligado;
    }
}
//Instanciar
const comp1 = new Computador('Rapidão', 16, 5, true);
comp1.nome; // ->> Rapidão
comp1.info();
comp1.nome = "Gamer";
comp1.altRam = 10;
comp1.info();
//# sourceMappingURL=aula16.js.map
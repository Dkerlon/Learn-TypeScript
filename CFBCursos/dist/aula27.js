"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let curso1 = {
    titulo: 'Curso de TypeScript',
    des: 'Tipagem e tals',
    ativo: true
};
let curso1Prog = {
    titulo: 'Arquitetura de Software',
    des: 'Dados e Computadores',
    ativo: true,
    preRequisitos: true,
    aulas: 350,
};
class Curso {
    des;
    titulo;
    ativo;
    preRequisitos;
    aulas;
    maxAlunos;
    constructor(titulo, des, ativo, preRequisitos, aulas) {
        this.titulo = titulo,
            this.des = des,
            this.ativo = ativo,
            this.preRequisitos = preRequisitos,
            this.aulas = aulas,
        ;
    }
}
//# sourceMappingURL=aula27.js.map
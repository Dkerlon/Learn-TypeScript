//Interfaces
interface curso {
    titulo: string,
    des:string,
    ativo: boolean,
    iniciarCurso?(teste: string):void,
}

interface cursoProg extends curso{
    aulas:number,
    maxAlunos?:number,
    preRequisitos: boolean,
}

interface cursoHist extends curso{
    aulas:number,
    maxAlunos?:number,
}

let curso1:curso = {
    titulo: 'Curso de TypeScript',
    des:'Tipagem e tals',
    ativo: true
}

let curso1Prog : cursoProg = {
    titulo: 'Arquitetura de Software',
    des: 'Dados e Computadores',
    ativo: true,
    preRequisitos: true,
    aulas: 350,
}

class Curso implements cursoProg{
    des: string;
    titulo: string
    ativo: boolean;
    preRequisitos: boolean;
    aulas: number;
    maxAlunos?: number;

    constructor(titulo: string, des: string, ativo: boolean, preRequisitos: boolean, aulas: number){
        this.titulo = titulo,
        this.des = des,
        this.ativo = ativo,
        this.preRequisitos = preRequisitos,
        this.aulas = aulas,
    }
}
class Pessoa {
    nome: string;
    altura: number;

    constructor(nome: string, altura: number){
        this.nome = nome;
        this.altura = altura;
    }
}

class Objeto {
    constructor(public nome: string){}
}

const arrayAleatorio = ["coisas","coisas2","things","something"]
export default Objeto
export { Pessoa, arrayAleatorio }
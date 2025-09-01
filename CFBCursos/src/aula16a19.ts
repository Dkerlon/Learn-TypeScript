//POO #P1
class Computador {
    constructor(
        public nome:string,
        private ram:number,
        private cpu:number,
        protected ligado:boolean
    ){}

    info():void{
        console.log(this.nome)
        console.log(this.ram)
        console.log(this.cpu)
        console.log(this.ligado)
    }

    set altRam(ram: number){
        this.ram = ram
    }

    set altCpu(cpu: number){
        this.cpu = cpu
    }

    set altLigado(ligado: boolean){
        this.ligado = ligado
    }


}
//Instanciar

const comp1 = new Computador('Rapidão',16,5,true);

comp1.nome // ->> Rapidão
comp1.info()
comp1.nome = "Gamer";
comp1.altRam = 10;

comp1.info()
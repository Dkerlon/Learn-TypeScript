function add(a: number, b = 5){
    return a + b
}

function log(message: string):void{
    console.log(message)
}

function logEror(message: string):never{
    throw new Error(message)
}

function callAdd(fAdd: (a:number, b: number) => number){
    //....
    let sum = fAdd(5,5)
}

type User = {
    name: string,
    age:number,
    greet: () => string
}

let userOne: User = {
    name:'Kerlon',
    age:19,
    greet(){
        return this.name
    }
}
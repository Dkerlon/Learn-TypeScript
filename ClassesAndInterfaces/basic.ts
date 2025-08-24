// class User{
//     name: string;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age
//     }
// }

// const usuario = new User('Kerlon',19)

class User{
    private found: number = 0
    public readonly uf: string = 'RJ'
    constructor(public name:string,public age:number){
    };
};

const kerlon = new User('Kerlon',19);
const max = new User('Max',37);

console.log(kerlon,max)
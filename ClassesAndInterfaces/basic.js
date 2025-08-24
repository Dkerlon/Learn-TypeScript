// class User{
//     name: string;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age
//     }
// }
// const usuario = new User('Kerlon',19)
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    return User;
}());
;
var kerlon = new User('Kerlon', 19);
var max = new User('Max', 37);
console.log(kerlon, max);

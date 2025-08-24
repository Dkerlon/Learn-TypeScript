class User{
    private _hobbies: string[] = []
    constructor(protected _firstName: string, private _lastName: string){
    };
    get fullName(){
        return this._firstName + '' + this._lastName
    };
    set Hobbies(hobbie : string){
        this._hobbies.push(hobbie);
    };
    static eid = 'User';

    static greet(){
        console.log('Hello!');
    };
}

class Developer extends User{
    constructor(public jobTitle: string,firstName: string, lastname: string){
        super(firstName,lastname)
    }
    work(){
        console.log(this._firstName)
    }
}
const kerlon = new User('Kerlon','Aragão');
kerlon.Hobbies = 'Play Games';
console.log(kerlon.fullName);

abstract class AccountTransfer{
    constructor(public identifier: string){}

    abstract saque(value: number): void;
    abstract deposito(value: number): void;
}

class Account extends AccountTransfer{
    constructor(public identifier:string, private cpf:string){
        super(identifier);
    };
    ///...
    saque(value: number): void {
        ///....
    }
    deposito(value: number): void {
        ///....
    }
};
interface Authenticatable{
    email: string;
    password: string;

    login():void;
    logout():void;
}

interface Authenticatable {
    admin : boolean
}

interface AdminAuth extends Authenticatable{
    role: 'admin'| 'superadmin'
}

type funcaos = {
    (a: number, b: number): number
}

let funcao: funcaos = (a:number, b:number) => a + b 

let user: Authenticatable = {
    email: 'kerlon@kerlon.com',
    password:'abc123',
    admin: true,
    login(){

    },
    logout(){

    },
} 

console.log(user)


class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public admin: boolean
  ) {}

  login(): void {
    console.log(`${this.email} fez login.`);
  }

  logout(): void {
    console.log(`${this.email} fez logout.`);
  }
}
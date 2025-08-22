let hobbies = ['Music','Play']

//hobbies.push(10)

let users: (string | number)[];
//let users : Array<string | number>;
users = [1,'Kerlon'];
users = [1,2];
users = ['Kerlon','Aragão']

let possibleResults: [number,number];

possibleResults = [1,-1]
//possibleResults = [1,-1,2]

let User: {
    nome: string;
    age: number;
    hobbies: [string,string];
} = {
    nome : 'Kerlon',
    age: 19,
    hobbies: ['Music','Play']
}

let val: {} = 'is a value';

let myObj: Record<string,string | number>;

myObj = {
    name:'Kerlon',
    age:19
}
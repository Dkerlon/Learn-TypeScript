type User = {name: string, age: number};
type UserKeys = keyof User;

let validKeys: UserKeys = 'name';
validKeys = 'age';

function getProp<T extends object,U extends keyof T>(obj:T,key:U){
    const val = obj[key]
    if(val === undefined || val === null){
        throw new Error('Keyoff error');
    };

    return val;
};

let user = {name:'kerlon',age:19};

let val = getProp(user,'age');
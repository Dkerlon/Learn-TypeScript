function generateError(msg?: string){
    throw new Error(msg);
};

generateError();
generateError('A error ocurred');

type User = {
    name: string;
    age:number;
    role?: 'admin' | 'guest'
};

const enteredInput = '';
const logInput = enteredInput ?? false;
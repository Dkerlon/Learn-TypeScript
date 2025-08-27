type StringArray = string[];

type GetElementType<T> = T extends any[] ? T[number] : T;

let text = 'Kerlon';
type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;

type FullNamePerson = {
    firstName: string;
    lastName:string;
}
type FullNamerOrNothing<T> = T extends FullNamePerson ? string : never;
function getFullname<T extends object>(obj:T): FullNamerOrNothing<T>{
    if('firstname' in obj && 'lastname' in obj && obj.firstname && obj.lastname ){
        return `Hi! ${obj.firstname} ${obj.lastname}` as FullNamerOrNothing<T>;
    };

    throw new Error('Last name and / or lastname dont found.')
}
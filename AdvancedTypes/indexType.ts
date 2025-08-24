type DataStore = {
    [prop:string]: string | number | boolean | string[];
    name:string
};

let someObj: Record<string, number | boolean> = {

} 

const store: DataStore = {
    name:'Kerlon'
}

store.id = 5;
store.section = true

let roles = ['admin','comum','user'] as const;

const dataEntries = {
    entry1: 1,
    entry2: 2
} satisfies Record<string, number>;


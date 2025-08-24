type FileSource = {type:'file',path: 'file.source'};
type DbSource = {type:'db',connectUrl: 'db.source'};
type Source = FileSource | DbSource;

const loadData:(source: Source) => void = (source: Source) => {
    // if('path' in source){
    //     source.path;
    //     return;
    // };
    if(source.type === 'file'){
        console.log(source.path)
        return
    }
    console.log(source.connectUrl)
}

function isFile(source:Source){
    return source.type === 'file'
}

class User {
    constructor(public name: string){}
}

class Admin extends User {
    public role = 'admin'
    constructor(public name: string){
        super(name)
    }
}

const user = new User('Max')
const admin = new Admin('Kerlon')

type entity = User | Admin;
function init(entity:entity){
    if(entity instanceof User){
        console.log('Hello User')
        return
    }
    
    console.log('Hello Admin!')
}
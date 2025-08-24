//Overloads functions
function getLength(val: string):string[];
function getLength(val: any[]): number;
function getLength(val: string | any[]){
    if(typeof val === 'string'){
        return val.split(' ');
    };

    return val.length
};


let a : null | string;

a = 'Hi!';

a = null;

const inputEl = document.getElementById('inputUser');

if(!inputEl){
    throw new Error('Empty');
}

console.log(inputEl.value)
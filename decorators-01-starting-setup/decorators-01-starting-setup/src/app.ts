function Logger(stringLog: string){
    return function (constructor: Function){
        console.log(stringLog)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string){
    return function(constructor: any){
        const p = new constructor();
        const elHook = document.querySelector(`#${hookId}`)
        if(elHook){
            elHook.innerHTML = template
            elHook.querySelector('h1')!.textContent = p.name
        }
    }
}

// @Logger('Person-Class')
@Logger('Login')
@WithTemplate('<h1> Person Object </h1>','app')
class Person {
    name = 'Kerlon'

    constructor(){
        console.log('Hi' + this.name)
    }
}

const person = new Person

function log(target: any, propertyName: string | Symbol){
    console.log('Property Decorator!')
    console.log(target, propertyName)
}

class product {
    @log
    title: string
    private _price: number
    constructor(p: number, title: string){
        this.title = title
        this._price = p
    }

    set price(val: number){
        this._price = val
    }

    get price(): number {
        return this._price;
    }
}
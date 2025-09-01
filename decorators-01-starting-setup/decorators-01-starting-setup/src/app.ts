function Logger(stringLog: string){
    return function (constructor: Function){
        console.log(stringLog)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string){
    return function<T extends new(...args: any[]) => { name: string}>(originalConstructor: T){

        return class extends originalConstructor{
            constructor(..._: any[]){
                super()
                const elHook = document.querySelector(`#${hookId}`)
                if(elHook){
                    elHook.innerHTML = template
                    elHook.querySelector('h1')!.textContent = this.name
                }
            }
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

const person = new Person()

function log(target: any, propertyName: string){
    console.log('Property Decorator!')
    console.log(target, propertyName)
}

function log2(target: any, name: string, description: PropertyDescriptor){
    console.log('Property Decorator!')
    console.log(target)
    console.log(name)
    console.log(description)
}

function log3(target: any, name: string, description: PropertyDescriptor){
    console.log('Method Decorator!')
    console.log(target)
    console.log(name)
    console.log(description)
}

class product {
    @log
    title: string
    private _price: number
    constructor(p: number, title: string){
        this.title = title
        this._price = p
    }

    @log2
    set price(val: number){
        this._price = val
    }

    get price(): number {
        return this._price;
    }

    @log3
    static hello(){
        console.log('Hello!')
    }
}

function autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value
    const adjDecriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDecriptor
}

class Printer {
    message = 'This Workds';

    @autobind
    showMessage(){
        console.log(this.message)
    }
}

const p = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)


class Course {
    title: string;
    price: number;

    constructor(t: string, p: number){
        this.title = t
        this.price = p
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const titleEl = document.querySelector('#title') as HTMLInputElement
    const priceEl = document.querySelector('#price') as HTMLInputElement

    const title = titleEl.value
    const price = +priceEl.value

    const newCourse = new Course(title, price)
    console.log(newCourse)
})
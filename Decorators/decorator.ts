function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext){
    console.log('Context:')
    console.log(target)
    console.log(ctx)

    return class extends target{
        constructor(...args: any[]){
            super(...args)

            console.log('Constructor!')
        }
    }
}

function autoBind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext){
    ctx.addInitializer(function (this: any) {
        this[ctx.name] = this[ctx.name].bind(this)
    })

    return function (this: any, ...args: any[]){
        console.log('Executing original function!')
        return target.apply(this, args);
    }
}

function rename<T>(initValue: T) {
    return function (target: undefined, ctx: ClassFieldDecoratorContext) {
        console.log(ctx);

        return function (initialValue: any) {
            console.log('Initial Value'); // ->> "Kerlon"
            return initValue;
        };
    };
}

@logger
class Person {
    @rename('Aragão')
    public _name = 'Kerlon';

    get name(){
        return this._name
    }
    @autoBind
    greet(){
        return `Hi! ${this.name}`
    }
}

const person = new Person;
const greet = person.greet;
greet()
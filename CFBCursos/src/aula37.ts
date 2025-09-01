//POO: Static

class staticMemberOrPropertys {
    static className: string = staticMemberOrPropertys.name
    static numOfClassesCreated: number = 0

    constructor(){
        staticMemberOrPropertys.numOfClassesCreated++
    }
}

const c1 = new staticMemberOrPropertys()
const c2 = new staticMemberOrPropertys()
const c3 = new staticMemberOrPropertys()
const c4 = new staticMemberOrPropertys()

console.log(staticMemberOrPropertys.numOfClassesCreated)
console.log(staticMemberOrPropertys.className)
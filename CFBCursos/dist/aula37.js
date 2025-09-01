"use strict";
//POO: Static
Object.defineProperty(exports, "__esModule", { value: true });
class staticMemberOrPropertys {
    static className = staticMemberOrPropertys.name;
    static numOfClassesCreated = 0;
    constructor() {
        staticMemberOrPropertys.numOfClassesCreated++;
    }
}
const c1 = new staticMemberOrPropertys();
const c2 = new staticMemberOrPropertys();
const c3 = new staticMemberOrPropertys();
const c4 = new staticMemberOrPropertys();
console.log(staticMemberOrPropertys.numOfClassesCreated);
console.log(staticMemberOrPropertys.className);
//# sourceMappingURL=aula37.js.map
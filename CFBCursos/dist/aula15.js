"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(...ns) {
    return ns.reduce((oldN, newN) => {
        return oldN + newN;
    });
}
;
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8));
//# sourceMappingURL=aula15.js.map
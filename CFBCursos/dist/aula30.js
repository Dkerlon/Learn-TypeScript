"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassesTS_1 = require("./ClassesTS"); //export
const ClassesTS_2 = __importDefault(require("./ClassesTS")); // export default
const p1 = new ClassesTS_1.Pessoa("Kerlon", 1.65);
const obj = new ClassesTS_2.default("Kerlon");
console.log(p1);
console.log(obj);
console.log(ClassesTS_1.arrayAleatorio);
//# sourceMappingURL=aula30.js.map
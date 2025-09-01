"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["terca"] = 3] = "terca";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
dias.domingo; // ->> 1
console.log(dias.sabado); // ->> 7
console.log(dias["domingo"]); // ->> 1
console.log(dias[1]); //->> Domingo
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['azul']);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 0] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 1] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPER"] = 2] = "SUPER";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.SUPER); // ->> 2
const usuario = tipoUsuario.ADMIN;
const usuario2 = 2; //->> SUPER;
//# sourceMappingURL=aula09.js.map
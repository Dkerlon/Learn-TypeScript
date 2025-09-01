enum dias {
    domingo = 1,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado,
}

dias.domingo // ->> 1

console.log(dias.sabado)// ->> 7
console.log(dias["domingo"])// ->> 1
console.log(dias[1])//->> Domingo

enum cores {
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log(cores.branco)
console.log(cores['azul'])


enum tipoUsuario {
    USER,
    ADMIN,
    SUPER
}

console.log(tipoUsuario.SUPER) // ->> 2

const usuario: tipoUsuario = tipoUsuario.ADMIN;
const usuario2: tipoUsuario = 2 //->> SUPER;
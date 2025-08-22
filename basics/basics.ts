let userName: string;//Tipo declarativo
let userAge = 19 //Tipo por inferencia

userName = 'Kerlon'


function add(a:number, b = 5){
    return a + b
}

add(10)
add(10,20)
// add('10','20')
// add(10,'20')
// add('10',20)
// Funcao sem retorno
function imprimirSoma (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //segundo valor é undefined
imprimirSoma(2, 3, 4, 5)
// JS não reclama o que outras linguagens reclamariam

function soma(a, b=1) {
    return a + b
}


console.log(soma(2, 3))
console.log(soma(2))
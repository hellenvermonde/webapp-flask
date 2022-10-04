// Armazenando uma funcao em uma variavel 
// Função anonima sem nome
const imprimirSomoa = function (a, b) {
    console.log(a, b)
}

imprimirSomoa(2, 3)


// Armazenando uma funcao arrow em uma variavel 
// Forma reduzida de um função
// Permite usar metodos, como map
const soma = (a, b) => {
    return a + b 
}

console.log(soma(2, 3))


// Retorno implícito 
// Sem chaves é pq a funcao so vai ter uma linha, curto e limpo 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Reduzido')

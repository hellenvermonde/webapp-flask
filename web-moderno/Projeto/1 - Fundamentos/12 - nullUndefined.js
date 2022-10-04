let valor //não inicializado
console.log(valor)
//console.log(valor2) //não foi declarado


valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto.preco)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)




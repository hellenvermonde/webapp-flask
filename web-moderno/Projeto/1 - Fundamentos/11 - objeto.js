const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.9
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

//flexivel, ativa criatividdae, deixa usar qualquer tipo

console.log(prod1)

//objeto com objetos dentro 
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        objs: {
            blabla: 2
        }
    }
}
console.log(prod2)

//json do objeto 
'{ "nome": "Camisa Polo", "preco": 79.90}'
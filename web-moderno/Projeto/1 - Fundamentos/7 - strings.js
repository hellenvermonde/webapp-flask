//delimitar strinhg por "" '' ´´

const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))


console.log(escola.charCodeAt(3)) //pegou o digito 3 e achou o codigo associado ao digito 3
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //indice 0 até 3

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

{
    { 
        { 
            var sera = 'Sera???' 
        } 
    }
}
console.log(sera)
//variavel Var será visivel fora de boloco, desde que função sem nome
//

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(teste)
//o escopo da função é visivel apenas dentro da função


//criar variavel fora de função, essa variavel é global
//tudo está sendo escrita dentro de uma "window"

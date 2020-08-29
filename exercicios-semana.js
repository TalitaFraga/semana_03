// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function maiorDosTres (numero1, numero2, numero3) {
    if(numero1 > numero2 && numero1>numero3) {
        return numero1 
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2
    } else if (numero3 > numero1 && numero3 > numero2) {
        return numero3
    }

}
let maior = maiorDosTres(5, 8, 2) 

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

function contaVogais(palavra) {
    let vogais = ["a", "e", "i", "o", "u"]
    let contagem = 0
    for (let i=0; i < palavra.length; i++) {

        if(vogais.includes(palavra[i])) {
            contagem = contagem + 1
        }
    }
    return contagem


}

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

function contaVogais(palavra) {
    let vogais = ["a", "e", "i", "o", "u"]
    let contagem = 0
    for (let i=0; i < palavra.length; i++) {

        if(vogais.includes(palavra[i])) {
            contagem = contagem + 1
        }
    }
    return contagem


}
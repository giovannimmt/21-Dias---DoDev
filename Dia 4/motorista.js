let nome = prompt("Insira seu nome:")
let idade = prompt("Qual a sua idade?")
let cartaMotorista = prompt("Você possui carteira de motorista?")
let carro = prompt("Você possui um carro?")

if(idade < 18 || cartaMotorista === "Não") {
    console.log(nome + " você não pode dirigir!")
} else if (idade > 18 && carro === "Não") {
    console.log(nome + " você pode dirigir mas não possui um carro!")
}else {
    console.log(nome + ", você será o motorista!")
}
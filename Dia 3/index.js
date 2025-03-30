// Sistema que solicita informações do usuário e calcula o IMC
let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let altura = Number(prompt("Digite sua altura:"))
let peso = Number(prompt("Digite seu peso:"))

//Informando o ano de nascimento, nome e IMC do Usuário
let anoQueNasceu = (2023-idade)
let IMC = (parseInt(peso/(altura*altura)))
console.log("Olá " + nome + ", você possui "+ idade + " anos" + ", nasceu em "+anoQueNasceu + 
    ", possui " + altura + " de altura," + " pesa "+ peso +"kg" + " e seu IMC é " + IMC+ "KG/m2")
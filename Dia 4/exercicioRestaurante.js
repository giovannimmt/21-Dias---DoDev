let temFome = prompt("Você está com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let restaurante = prompt("Seu restaurante preferido está aberto?")

if(temFome === "Não" || dinheiro === "Não") {
    console.log("Hoje a janta será em casa!")
} else if(temFome === "Sim" && restaurante === "Sim") {
    console.log("Hoje a janta será no seu restaurante favorito!")
} else {
    console.log("Peça um delivery!")
}
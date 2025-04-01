let opcao = prompt("Escolha a opção que te atenda melhor dentro do posto:" + 
    " \n1 = Abastecer com gasolina; \n2 = Abastecer com álcool; \n3 = Calibrar pneus;")
let valor
let quantidade


switch(opcao) {
    case "1": 
        valor = parseInt(prompt("Digite o valor que gostaria de abastecer:"))
        quantidade = valor*5
        console.log("Foi abastecido " + quantidade + " Litros de gasolina")
        break;

    case "2":
        valor = parseInt(prompt("Digite o valor que gostaria de abastecer:"))
        quantidade = valor*3
        console.log("Foi abastecido " + quantidade + " Litros de álcool")
        break;

    default:
        console.log("Os pneus foram calibrados com sucesso!")
        break;
}
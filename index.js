const prompt = require("prompt-sync")()

while (true){
console.log(`Tecle 1 para adicionar uma tarefa.
Tecle 2 para ver suas tarefas.
Tecle 3 para deletar sua tarefa.
Tecle 4 para atualizar sua tarefa.
Tecle 5 para sair.`)
let entrada = +prompt("O que deseja realizar? ")
switch (entrada) {
    case 1:
        console.log("adicionar")
        break;
    case 2:
        console.log("ver")
        break
    case 3:
        console.log("deletar")
        break
    case 4:
        console.log("atualizar")
        break
    case 5:
        console.log("Saindo...")
        process.exit()
        break
}
}
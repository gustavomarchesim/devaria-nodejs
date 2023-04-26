const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("O programa a seguir, verifica se o usuário possui mais de 18 anos e possui CNH para que possa participar de um encontro de KART com seus amigos!");
console.log("Além das verificações acima, é necessário verificar se o usuário está na lista de presença do encontro.");

readLine.question('Qual o ano de seu nascimento?: ', ano => {
    if(ano > 2004){
        console.log("Você não tem mais que 18 anos!");
    } else {
        readLine.question("Você possui habilitação? (S/N) ", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "S")){
                console.log("Você não tem habilitação para dirigir um Kart!");
                return;
            } else {
                readLine.question("Qual o seu nome? ", nome => {
                    switch(nome){
                        case 'Gustavo' : 
                            console.log(`Bem vindo ao Kart, ${nome}!`);
                            break;
                        case "Tainara" :
                            console.log(`Bem vindo ao Kart, ${nome}!`);
                            break;
                        case "Douglas" :
                            console.log(`Bem vindo ao Kart, ${nome}!`)
                            break;
                        default : 
                            console.log(`Nome não encontrado na lista de convidados, ${nome}!`);
                            break;
                    }
                })
            }
        })
    }
});
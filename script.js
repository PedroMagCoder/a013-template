// const idadeDoDependente = Number(prompt('Solicitação de depebdente \n qual a idade do dependente?'))

// if(idadeDependente>=13){
//     if(idadeDependente<18){
//         console.log("Seu filho já pode ter um acartão vinculado ao seu");
//     }else{
//         console.log("Consulte outras possibilidades do Labank");
//     }
// }else{
//     console.log("Consulte outras possibilidades do Labank");
// }

//-----------------------------------------------------------------------

// if(idadeDoDependente>=13 && idadeDoDependente<18){
//     console.log("Seu filho já pode ter um acartão vinculado ao seu");
// }else{
//     console.log("Consulte outras possibilidades do Labank")}

//------------------------------------------------------------------------

    // console.log(idadeDoDependente===13? 'mensagem1':'mnesagem 2')

//------------------------------------------------------------------------

// const numeroRamal=Number(prompt('Solicitação de cartão de crédito \n Digite a opção desejada: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- MasterGold'))

// switch(numeroRamal){
//     case 1:
//         console.log('Cartão Fácil adquirido')
//         break;
//     case 2: 
//         console.log('Cartão Black adquirido')
//         break;
//     case 3:
//         console.log('Cartão Platinum adquirido')   
//         break;
//     case 4:
//         console.log('Cartão Master Gold adquirido')   
//         break;   
//     default:}

const numero = +prompt('escreva um número')

// if (numero % 2 === 0){
//     console.log("é divisível por 2")
    
//     if (numero % 3 === 0){
//         console.log("é divisível por 3")
//     }else 
//     console.log("não é divisível por 3")

// } else
//     console.log("é divisível por 3")

if (numero % 2 === 0 &&  numero % 3 === 0){
    (console.log(numero === 30 ? 'UFA, ACERTEI' : 'Não foi dessa vez'))
    
    console.log('é divisível por 2 e por 3')

    switch(numero){
        case 6:
            console.log("fala" + numero)
            break

        case 12:
            console.log("oi" + numero)
            break
        
        case 18:
            console.log("de maior" + numero)
            break
            
        case 24:
            console.log("ainda é jovem com" + numero)
            break
    
        case 30:
            console.log("idade do Pedro é" + numero)
            break
    
            default: console.log("o número é maior que 30 ou menor do que 6") }    

}else{
    console.log('não é divisível')
}


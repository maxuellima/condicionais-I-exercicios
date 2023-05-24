const escolar = (idade, ensinoMedio, faculdade) =>{
    idade = prompt("Qual a sua idade?")
    ensinoMedio = confirm("Terminou o ensino médio?")

    if(idade >= 18){
        console.log(`A pessoa tem ${idade} anos, ela é maior de idade`)
    }else{
        console.log(`A pessoa tem ${idade} anos, ela é menor de idade!`)
    }

    if(ensinoMedio === true){
        faculdade = confirm(`NÃO está cursando faculdade?`)
        if(faculdade === true){
            console.log(`Terminou o ensino médio, mas não faz faculdade!`)
        }else{
            console.log(`Terminou o  ensino médio e cursa faculdade, que legal!`)
        }        
    }else{
        console.log(`Não terminou o ensino médio! `)
    }
}
escolar()
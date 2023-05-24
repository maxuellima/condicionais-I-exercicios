const pais = (nacionalidade) =>{
    nacionalidade = prompt(`Digite aqui  a sua nacionalidade`)

    if(nacionalidade === "brasileira"){
        console.log(`Você é ${nacionalidade}`)
    }
    else if(nacionalidade === "argentina"){
        console.log(`Você é ${nacionalidade}`)
    }
    else if(nacionalidade === "uruguaia"){
        console.log(`Você é ${nacionalidade}`)
    }
    else if(nacionalidade === "chilena"){
        console.log(`Você é ${nacionalidade}`)
    }
    else if(nacionalidade === "colombiana"){
        console.log(`Você é ${nacionalidade}`)
    }
    else{
        console.log("Nacionalidade não encontrada, digite novamente")
    }
}
pais()
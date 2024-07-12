const grafo = {
    "voce": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "jonny": []
}



function pessoaevendedor(nome){       //função para verificar se a pessoa vende banana, simples para testarmos a pesquissa em largura.
    return nome[nome.length-1]=== 'b'
}
function pesquisa(nomeInicial){
    let filadepesquisa = [...grafo[nomeInicial]] //função para armazenar pessoas que já foram verificadas
    let verificadas = []


while(filadepesquisa.length>0){
    let pessoa = filadepesquisa.shift()
    if(!verificadas.includes(pessoa)){
    if(pessoaevendedor(pessoa)){
        console.log(`${pessoa} é um vendedor de Banana!`)
        return true //caso o algoritmo encontre o vendedor de Banana
    }
    else{
        filadepesquisa= filadepesquisa.concat(grafo[pessoa])
        verificadas.push(pessoa)
    }
    
  }
 }
 return false //caso chegue até aqui, o vendedor de Bananas não foi encontrado no grafo
    
}

console.log(pesquisa('voce'))
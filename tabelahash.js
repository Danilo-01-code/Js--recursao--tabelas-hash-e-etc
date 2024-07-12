/*let tabelahash = {maçã: 0.67,ovos: 2.47, pera:0.79}


console.log(tabelahash)

console.log(tabelahash['maçã'])*/




let votaram = {} // Tabela hash para armazenar os eleitores que já votaram
votaram['leo']=true
function verificaeleitor(nome) {
    if (votaram[nome]) {
        console.log('Eleitor já votou. Não pode votar novamente!')
    } else {
        votaram[nome] = true
        console.log('Eleitor registrado. Pode votar!')
    }
}

verificaeleitor('leo')    // Primeira verificação para 'leo'
verificaeleitor('marcos') // Segunda verificação para 'marcos'

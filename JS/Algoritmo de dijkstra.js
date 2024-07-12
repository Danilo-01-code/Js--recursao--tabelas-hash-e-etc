//Primeiro eu vou definir as tabelas Hash.
/*

   inicio
   /    \
 6/      \2
 /        \
a ---3---  b
 \        /
  1\    /5
    \  /
     fim


grafo que irei representar  
     */ 
let grafo = {
    'inicio':{'a': 6, 'b': 2},
    'a':{'b': 3 , 'fim': 1},
    'b':{'fim': 5},
    'fim':{}
}

let custos = {
   'a': 6,
    'b': 2,
    'fim': Infinity
}

let pais = {
    'a':'inicio',
    'b':'inicio',
    'fim':null

}

let processados=[]

/*Agora cé necessário criar uma função para encontrar o nó com o menor custo*/

function acheNoCustoMaisBaixo(custos,processados){
        let custoMaisBaixo = Infinity
        let nodoCustoMaisBaixo = null
        
        for (let nodo in custos){
            let custo = custos[nodo]
            if(custo < custoMaisBaixo && !processados.includes(nodo)){
            custoMaisBaixo = custo
            nodoCustoMaisBaixo = nodo
            }
        }
        return nodoCustoMaisBaixo
}

//Agora o Loop para o Algoritmo de Dijkstra
let nodo = acheNoCustoMaisBaixo(custos,processados)
while(nodo!== null){
    let custo = custos[nodo]
    let vizinhos = grafo[nodo]
    for (let n in vizinhos){
        let novoCusto = custo + vizinhos[n]
        if (custos[n] > novoCusto){
            custos[n] = novoCusto
            pais[n] = nodo
        
        }
    }
    processados.push(nodo)
    nodo = acheNoCustoMaisBaixo(custos,processados)
}

//Resultado da obra

console.log('Custos:', custos)  /*mostra os menores custos do incío para A,B e Fim*/

console.log('Custo para o fim:',custos['fim'])
//mostra o custo para o Fim

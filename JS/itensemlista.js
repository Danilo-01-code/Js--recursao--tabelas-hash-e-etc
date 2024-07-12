function contlista(array){
    if(array.length==0){
        return 0   //retorna zero se não houver itens na lista (código base)
    }
    else{
        return 1 + contlista(array.slice(1)) /*recursividade, Na função recursiva countlista, usei slice(1) para criar um novo array que contém todos os elementos do array original, exceto o primeiro elemento. Isso é útil para reduzir o problema a um subproblema menor (dividir para conquistar), permitindo que a função prossiga até atingir o caso base de um array vazio. */
    }
    
}

let c = [7,5,6,5,4,5,6,3,2,7,8,5,4,1,2,3]

console.log(contlista(c)) //chama a função e retorna dezesseis
console.log(c.length) //forma não recursiva de se fazer (extremamente simples, porém não desafiador)
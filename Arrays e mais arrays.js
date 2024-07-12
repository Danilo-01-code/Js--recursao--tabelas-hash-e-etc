let array= [2,4,6]

console.log(soma(array)) //saída 12, soma de todos os elementos de array


function soma(arr, idx=0){
if(idx>=arr.length){
    return 0 //retorna  zero se não houver elementos no array (código base)
}
else{
    return arr[idx]+=soma(array,idx+1) //soma array de índice 0 aos outros próximos e retorna o valor da soma '12'
}
}


function fatorial(n){
    if(n===1){
        return 1 //retorna o resultado  de 1!(código base)
    }
    else{
        return n * fatorial(n - 1) //retorna o resultado do cálculo responsivo n * (n-1)! 
    }

}

console.log(fatorial(5))

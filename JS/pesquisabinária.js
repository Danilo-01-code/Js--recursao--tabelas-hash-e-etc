function pesquisabinariaRecursiva(lista, item, baixo = 0, alto = lista.length - 1) {
    if (baixo > alto) {
        return null // Retorna null se o item não estiver na lista
    }
    
    let meio = Math.floor((baixo + alto) / 2);
    let chute = lista[meio]
    
    if (chute === item) {
        return meio // Retorna o índice se encontrar o item
    } else if (chute > item) {
        return pesquisabinariaRecursiva(lista, item, baixo, meio - 1) // Busca na metade inferior
    } else {
        return pesquisabinariaRecursiva(lista, item, meio + 1, alto) // Busca na metade superior
    }
}

let array = [2, 5, 6, 27, 32, 56, 84, 67, 54, 84, 1]

console.log(pesquisabinariaRecursiva(array, 27)) // Saída: 3 (índice onde 27 está no array)
console.log(pesquisabinariaRecursiva(array, 10)) // Saída: null (10 não está no array)

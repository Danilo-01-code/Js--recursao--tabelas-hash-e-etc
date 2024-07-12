function quicksort(array) {
    if (array.length < 2) {
        return array; //código base
    } else {
        const pivot = array[0]; //define  um pivô
        const menores = array.slice(1).filter(i => i <= pivot);
        const maiores = array.slice(1).filter(i => i > pivot);
        return [...quicksort(menores), pivot, ...quicksort(maiores)];
    }
}

// Exemplo de uso:
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quicksort(array)); // Output: [1, 1, 2, 3, 6, 8, 10]
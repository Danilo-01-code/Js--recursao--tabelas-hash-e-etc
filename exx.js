function imprime_item(lista) {
    for (let item of lista) {
        console.log(item)
    }
}

let item = [1, 5, 6, 2, 6, 54, 6];
imprime_item(item)


function imprime_itens2(lista) {
    lista.forEach((item) => {
        setTimeout(() => {
            console.log(item);
        }, 1000 * lista.indexOf(item));
    });
}

let lista = [1, 5, 6, 2, 6, 54, 6];
imprime_itens2(lista);

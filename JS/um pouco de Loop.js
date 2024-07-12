const numeros= [1,4,5,6,3,2,1,4,8,7,8,9,5]
console.log(soma(numeros))


function soma(lista){
    let total = 0
    for (let x of lista){
        total +=x
    }
    return total
}

let numeros2 = [10, 20, 30, 40, 50];

for (let numero of numeros2) {
  console.log(numero);
}

for (let i = 0; i < numeros2.length; i++) {
    console.log(numeros2[i])
}

//estruturas em loop
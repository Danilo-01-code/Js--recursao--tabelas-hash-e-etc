function maisalto(array){
    if (array.length==1){
        return array[0] //retorna o primeiro item, caso só tenha um elemento no array (código base)
    }
    else{
        const primeiroelemento = array[0]  
        const Maisalto = maisalto(array.slice(1)) //essa função recursiva procura o valor mais alto sem procurar pela array de índice 0

        return primeiroelemento > Maisalto ? primeiroelemento : Maisalto 
        
        /*caso o primeiro elemento for maior ele retorna, caso o elementodefinido pela recursividade seja mais alto ele retorna.*/
        
        
    }
}
let a = [1,5,9,6,3,1,2,7,8,99] 

console.log(maisalto(a)) //teste (retorna 99)
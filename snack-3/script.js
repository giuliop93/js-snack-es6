//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = myArray(1);
var b = myArray(8);
console.log(a);
console.log(b);
function getNUmbersInBetween (myArray, a, b){
    return myArray.filter(function(element, index)) {
        console.log(`element: ${element}, index: ${index}, startIndex: $`)
        if (index > starIndex && index < endIndex){
            return true;
        } else {
            return false;
        }
    } 
});

function sublistForeach(array, startIndex, endIndex){
    const result = [];
    array.forEach((element, index)) => {
        if (index > starIndex && index < endIndex){
            result.push(element);
        }        
    });
    return result;
}

var array = []

var nuovoArray = sublist(array, 1, 3);
console.log(nuovoArray);

var nuovoArray2 = sublistForeach(array, 1 , 3);

console.log(nuovoArray);
console.log(nuovoArray2);

//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.

// // Snack 1:
// // Creare un array di oggetti:
// // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicycles = [
    {
        nome: "bianchi",
        peso: 28
    },
    {
        nome: "graziella",
        peso: 15
    },
    {
        nome: "alan",
        peso: 10
    }
]

// // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let pesoMinore = bicycles[0].peso;
let biciLeggera = bicycles[0];
for (i = 0; i < bicycles.length; i++) {
    if (bicycles[i].peso < pesoMinore) {
        biciLeggera = bicycles[i];
        pesoMinore = bicycles[i].peso
    }
}

console.log(biciLeggera);
const [bicycles[i]] = bicycles;
console.log(bicyclesOne, bicyclesTwo);

//versione di florian
const lighterBike = findLighterBike(bicyclesList);

const findLighterBike = (arrayList) => {
    let lighterBike
// o (senza arrow function)
function findLighterBike(arrayList){
    for (i = 0; i < arrayList.length; i++){
        const { name, weight } = arrayList[i];

        if(!lighterBike || weight < lighterBike.weight) {
            lighetrBike = {
                name,
                weight
                //oppure, che è uguale, usando lo spread operator
                ...bici
            }
        }
    }
    return lighterBike;
}

const foundLighterBike = findLighterBike(bicyclesList);


//versione più smart, usando il sort al posto del for
bicyclesList.sort(a, b) = a.weight - b.weight)

bicyclesList.sort((a, b) = > {
    const result = a.weight - b.weight;

    if (result > 0) {
        return -1
    } else if (result < 0= {
        return -1
    } else {
        return 0
    }
}

//console log col template literal(backtick)
console.log(``)
console.log(foundLighterBike);
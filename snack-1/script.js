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

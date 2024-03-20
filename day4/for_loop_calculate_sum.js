const zahlen = [10, 20, 30, 40, 50];
let summe = 0;

for (let i = 0; i < zahlen.length; i++) {
    //summe = summe + zahlen[i];
    summe += zahlen[i];
    console.log(summe);

    
}
console.log("Die Summe ist: "+ summe);
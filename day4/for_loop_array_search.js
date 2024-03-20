const inventar = [
    { name: "Stifte", menge: 25 },
    { name: "Notizbuecher", menge:13 },
    { name: "Schere",menge: 8 }
];

let gesuchterArtikel = "Stifte";

for ( i = 0; i < inventar.length; i++) {
    if (inventar[i].name === gesuchterArtikel) {
        console.log(`${gesuchterArtikel} sind vorhanden, Menge: ${inventar[i].menge}`);
        break;
    }
}
let person = {
    name: "Max Mustermann",
    alter: 30,
    beruf: "Webentwickler"

    
};

// Auf einzelne Objekte zugreifen
// Punkt Notation
console.log(person);
console.log(person.name);

// Klammer-Notation
console.log(person['alter']);

// Eigenschaften Hinzufuegen
person.beruf = "Softwareentwickler";
console.log(person);

// Eigenschaften Hinzufuegen
person.hobbys = ["Lesen", "Wandern"];
console.log(person);

// Objekt-Methoden definieren
person.vorstellen = function() {
    console.log(`Hallo, ich bin ${this.name} und ich bin ${this.beruf}.`);
}

person.vorstellen();


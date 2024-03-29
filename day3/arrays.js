// Ein Array erstellen
var tiere = ["Katze", "Hund"];
console.log(tiere);

// Ein einzelnes Element aus dem Array ausgeben
console.log(tiere[1]);

// Ein Element in das Array hinzufügen
tiere.push("Kaninchen");
console.log(tiere);


// Das letzte Element aus dem Array entfernen
var result = tiere.pop();
console.log(result);
console.log(tiere);

// Das erste Element aus dem Array entfernen
var first_element = tiere.shift();
console.log(first_element);
console.log(tiere);

// Entfernen die Inhalten von Element, aber das Element bleibt in dem Array
delete tiere[1];
console.log(tiere);

// Ein Element aus dem Array entfernen
var deleted_element = tiere.splice(1,1);
console.log(deleted_element);
console.log(tiere);

// Mehrere Elemente aus dem Array entfernen
var myNumbers = [1, 2, 3, 4, 5];
myNumbers.forEach(num => console.log(num *2 ));
var deleted_numbers = myNumbers.splice(1,3);
console.log(deleted_numbers);
console.log(myNumbers);


// Fuer jedes Element eine bestimmte Logik ausfuehren
tiere.forEach(tier => console.log(tier));

// Ein Element im Array suchen
var hund = tiere.find(tier => tier === "Hund");
console.log(hund);

// Wir nicht gefunden, da sie nicht gespeichert worde.
var hund = tiere.find(tier => tier === "Loewe");
console.log(hund);











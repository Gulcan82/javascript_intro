// Den Wert der  Konstanten kann man nicht veraendern.
const numConst = 5;
// Diese Zuweisung fuehrt zu einem Fehler.
// num Const = 10;

// Arrays werden als Konstanten deklariert
const numArray = [1, 2, 3];
console.log(numArray);
// Man kann die Array-Inhalten mit Array-Methoden veraendern.
numArray.pop();
console.log(numArray);
// Man kann aber andere Datentypen der Konstanten nicht zuweisen,
// Diese Zuweisung führt zu einem Fehler
// numArray = "string";
numArray = "string";
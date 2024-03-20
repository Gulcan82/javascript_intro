// Einfache Funktion ohne Parameter
function greeting() {
    console.log("Hallo");
}

greeting();

// Funktion mit Parameter
function addiere(num1, num2) {
    return num1 + num2;
    
}

// Anonyme Funktion
console.log(addiere(1,2));

const addingConst = function(num1, num2) {

    return num1 + num2;
    
}

// Arrow Funktion Pfeil-Funktion
console.log(addingConst(2,5));

const addingArrow = function(num1, num2) {

    return num1 + num2;
    
}

console.log(addingArrow(5,10));


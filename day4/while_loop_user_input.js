/*let userInput;
while (userInput < 1 || userInput > 10) {
    userInput = prompt("Bitte geben Sie eine Zahl zwischen 1 und 10 ein: ");
    userInput = parseInt(userInput);
}
console.log("Gueltige Eingabe: ", userInput);
*/

let userInput;
do {
    userInput = parseInt(prompt("Bitte geben Sie eine Zahl zwischen 1 und 10 ein: "));
} while (isNaN(userInput) || userInput < 1 || userInput > 10);

console.log("Gültige Eingabe:", userInput);

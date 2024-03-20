// Die let -Variablem ,uss man zuerst deklarieren und erst dann benutzen.
// console.log(outerVar);
let outerVar = "outer";
console.log(outerVar);

if (true) {
    let blockScope = "Block-Scope";
    console.log(blockScope);
}

 console.log(blockScope);
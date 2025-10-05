/* Ejemplo de codigo bloqueante  donde se ejecuta de forma sincronica y secuencial linea por linea  bloquea la ejecuicion del codigo hasta que no lea todo el archivo */

const fs = require("fs");

console.log("A : (esto se ejecuta primero)");

const data = fs.readFileSync("./texto.txt", "utf8");

console.log(`B : texto del archivo texto.txt  ---> ${data}`);

console.log("C : (recien despues de leer todo)");


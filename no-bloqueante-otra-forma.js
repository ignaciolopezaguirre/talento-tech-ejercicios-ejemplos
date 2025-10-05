/* No bloquea la ejecucion del codigo */

const fs = require("fs");

console.log("A : incio del programa");

const respuesta = (err, data) => {
  console.log("B : listo  el archivo (callback)");
};

/* se pasa como argumento a la funcion readFile  */
fs.readFile("./texto.txt", "utf8", respuesta);

console.log("C : sigo con otras cosass");


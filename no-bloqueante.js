/* bloquea el hilo de ejecucion del codigo
 */

const fs = require("fs");
console.log("A : incio del programa");

fs.readFile("./texto.txt", "utf8", (err, data) => {
  console.log("B : listo el archivo (callback)", err, data);
});

console.log("C : sigo con otras cosass");

/*  OTRA FORMA DE HACERLO SIN USAR EL METODO READFILE :  */

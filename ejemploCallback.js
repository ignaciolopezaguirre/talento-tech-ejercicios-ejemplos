/* las funciones callback o de orden superior son funcioens que reciben otra funcion  como argumento  o que retornan otra funcion */

function saludar(nombre) {
  console.log("saludar, " + nombre);
}

function saludarUsuario(usuario, callback) {
  callback(usuario);
}

saludarUsuario(
  "usuario2",
  saludar
); /* en el segundo parametro solo se pasa el nombre de la funcion callback */

/* Este ejemplo lo que hace es retornar un callback  ↓↓↓↓↓↓↓*/

function crearMensaje(saludo) {
  return function (nombre) {
    console.log(saludo + ", " + nombre);
  };
}

const saludoSpanish = crearMensaje("hola");
saludoSpanish("juan");

const saludoEnglish = crearMensaje("hello");
saludoEnglish("Maria");

const precios = [245, 223, 124045, 24525, 65566, 2313, 233, 111, 2314, 675];

const preciosConIva = precios.map(function (precio) {
  return `el precio  con iva incluido es de ${precio * 1.21}`;
});

console.log(preciosConIva);

/* otro ejemplo  */
const sumarNumeros = (num1, num2) => {
  return num1 + num2;
};

const calcular = (num1, num2, suma) => {
  return suma(num1, num2);
};
console.log(
  ` el resultado de este callback es --> ${calcular(31, 54, sumarNumeros)}`
);

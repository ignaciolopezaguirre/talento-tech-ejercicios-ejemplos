// promesas?
const mostrarEnSegundos = (info) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(info);
    }, 5000);
  });
};

mostrarEnSegundos("hola callBack");

/* callStack* (pila de llamada)*/

function suma(num1, num2) {
  return num1 + num2;
}

function dividirSuma(num1, num2) {
  return suma(num1, num2) / 2;
}

let x = dividirSuma(10, 5); // main() programa principal.
console.log("resultado es:", x); // main() programa principal.

const letras = ["a", "b", "c"];
letras.forEach((e, i) => {
  console.log(" array letras=", e, "i=", i);
}); // muestra el elemento y su indice correspondiente.

const paises = ["arg", "chile", "peru", "esp"];
paises.push("bolivia");

paises.forEach((pais) => {
  console.log(pais);
});

console.log(typeof paises);

const operation = (number1, number2, callBack) => {
  return callBack(number1, number2);
};
operation(2, 5, (a, b) => a + b);

const mostrarEn10Segundos = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value);
    }, 5000);
  });
};

console.log(mostrarEn10Segundos("hola promesa"));

let concentracion1 = -3;
let concentracion2 = -2;

const comparison = (concentracion1, concentracion2) => {
  if (concentracion1 < concentracion2) {
    return "es menor que numero2";
  } else {
    return "es mayor o igual";
  }
};

console.log(comparison(concentracion1, concentracion2));

const arregloInmutable = [1, 2, 3];

/* // Agregar un elemento al final
const arregloConcatenado = arregloInmutable.concat(4);
console.log(arregloInmutable);
// Eliminar el primer elemento
const arregloCortado = arregloInmutable.slice(1);

arregloInmutable // [1, 2, 3]
arregloConcatenado // [1, 2, 3, 4]
arregloCortado // [2, 3] */

const nuevoArreglo = arregloInmutable.map((i) => i * 2);

console.log(arregloInmutable);
console.log(nuevoArreglo);

// Multiplicar los números por 2
const hayPares = arregloInmutable.some((numero) => numero % 2 === 0);
const sonTodosPares = arregloInmutable.every((numero) => numero % 2 === 0);

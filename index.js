class Pizza {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

const pizzas = [
  new Pizza(1, "Fugazzeta", ["muzzarella", "cebolla"], 1000),
  new Pizza(2, "morron", ["muzzarella", "morron"], 400),
  new Pizza(3, "anchoas", ["muzzarella", "tomate", "ajo", "anchoas"], 1200),
  new Pizza(4, "panceta", ["muzzarella", "panceta", "cebolla"], 600),
  new Pizza(5, "jamon y morrones", ["jamon", "morron", "ajo"], 1200),
  new Pizza(6, "margherina", ["salsa de tomate", "queso"], 200),
];

console.log(pizzas);

// a . pizzas con ID impar

pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`la ${pizza.nombre} tiene un id impar`);
  }
});

// b. pizzas con precio menor a  $600

pizzas.filter((pizza) => {
  if (pizza.precio < 600) {
    console.log(`hay pizzas con valor menor a 600 pesos`);
  }
});

// c. Nombres de todas las pizzas

pizzas.map((pizza) => {
  // es mejor usar el metodo forEach()
  console.log(pizza.nombre);
});

// D. precios de las pizzas

pizzas.forEach((pizza) => {
  console.log(pizza.precio);
});

// E. pizzas con nombre y precio

let arrayPalabras = ["programacion", "Mexico", "miel", "MYM", "Madagascar"];

const palabrasConM = (palabras) => {
  let nuevoArray = [];
  palabras.forEach((palabra) => {
    if (palabra.toLowerCase().includes("m")) {
      nuevoArray.push(palabra);
    }
  });
  console.log(nuevoArray);
  return nuevoArray;
};

palabrasConM(arrayPalabras);


let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const numbers = (number1, number2, numeros) => {
  let newNumbers = [];
  numeros.forEach((numero) => {
    if (numero > number1 && numero < number2 ) {
      newNumbers.push(numero);
    }
  });
  console.log(newNumbers);
  return newNumbers;
};

numbers(1,8,numeros);

const autito = {
  marca: "Fiat",
  modelo: "Uno",
  anio: 1995,
  color: "rojo",
  arrancar: function () {
    console.log("run run");
  },
  frenar: function () {
    console.log("frenar");
  },
}

console.log(autito);

class Autos {
  constructor(marca, modelo, anio, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
  }
  arrancar() {
    console.log("run run");
  }
  frenar() {
    console.log("frenar");
  }
}





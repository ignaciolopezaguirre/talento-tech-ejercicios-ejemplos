/* FOR OF ES RECOMENDABLE USARLO CON ITERABLES COMO STRINGS OS ARRAYS  */

let palabra = "palabra";
for (let car of palabra) {
  console.log(car);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;
for (let element of nums) {
  console.log(`el elemento : ${element} esta en el indice ${i}`);
  i++;
}

/* el FOR IN esta mas pensado para objetos pero no son excluyentes uno de otro */

const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Buenos Aires",
  ocupacion: "Desarrolladora",
  saludar: function () {
    // Un método
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  },
};

for (let key in persona) {
  let valorKeys = persona[key];
  console.log(
    `la las claves de el objeto son : --> ${key} y los valores son :-->  ${valorKeys}`
  );
}

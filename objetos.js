const autos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    año: 2021,
    color: "Gris",
  },
  {
    marca: "Honda",
    modelo: "Civic",
    año: 2023,
    color: "Gris",
  },
  {
    marca: "Volkswagen",
    modelo: "Golf",
    año: 2020,
    color: "Gris",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    año: 2024,
    color: "Negro",
  },
  {
    marca: "Audi",
    modelo: "A4",
    año: 2022,
    color: "Plata",
  },
  {
    marca: "Nissan",
    modelo: "Sentra",
    año: 2021,
    color: "Verde",
  },
  {
    marca: "Hyundai",
    modelo: "Tucson",
    año: 2023,
    color: "Naranja",
  },
  {
    marca: "Mercedes-Benz",
    modelo: "Clase C",
    año: 2024,
    color: "Dorado",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    año: 2020,
    color: "Amarillo",
  },
];

console.log(
  `este array de objetos tiene ${Object.keys(autos).length} objetos `
);
const autoMayor2018 = autos.filter((auto) => auto.año > 2018);
console.log(autoMayor2018);

/* console.log(autos[0]); */

function identificarColor(listaAutos, colorAuto) {
  let cant = 0;
  let colorAuto2 = colorAuto.toLowerCase().trim();
  listaAutos.forEach(({ color }) => {
    /* <---- destrusturing para sacar el color */
    if (color.toLowerCase().trim() == colorAuto2) {
      cant++;
    }
  });
  console.log(`la cantidad de autos de color ${colorAuto2} son ${cant}`);
}

identificarColor(autos, "gris");

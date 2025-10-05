/* desestructurar un array */

const user = [1, "pepe", 35, "admin"];  /* si yo le cambio el valor despues de hacer una desestructuracion, no se modifica el valor original en el array, por ejmplos si yo cambio el valor del nombre y dsps hago un console.log del nombre y del array original aparece el nombre nuevo y el array con el nombre original */
let [id, nombre, edad, rol] = user;    
console.log(edad);

edad=50;        
console.log(edad,user);

/* desestructurar un objeto */

const person = {
    name :'ignacio',
    apellido:'lopez'
}

const {name,apellido} = person;

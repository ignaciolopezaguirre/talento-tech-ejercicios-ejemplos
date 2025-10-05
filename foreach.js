/* como es la lógica de el forEach se pasa la funcion mostrar como argumento del forEach */

const nums=[1,2,3,4,5,6,7,8,9,10];

function mostrar(item){
    console.log(item);
}

nums.forEach(mostrar)

nums.forEach((item) =>console.log(`${item} x 2  = ${item *2}`));

nums.forEach((item,i)=>{console.log(`el elemento ${item} esta en el indice ${i}`)});


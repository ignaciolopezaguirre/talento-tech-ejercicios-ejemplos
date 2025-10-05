const a =[1,2]
const b = [3,4]
const nuevoArray =[...a,...b];
console.log(nuevoArray);


const antiguoProducto ={
    id:1,
    nombre:"producto 1 ",
    precio:100
}

const nuevoProducto = {
    precio:120,
    descripcion:"un producto"
}

const productoCombinado= {...antiguoProducto,...nuevoProducto}
console.log(productoCombinado);
console.log(productoCombinado);
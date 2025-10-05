/* ejemplo de objeto funcional  */

function User(name,age){
    this.nombre = name;
    this.edad= age;
    this.admin = false;
    this.saludar= function(){
        console.log(`soy  ${this.nombre} mi edad es ${this.edad}`);
    }
}

const usu1 =new User("roberto",20);
const usu2 = new User('sofia',23);

console.log(usu1,usu2);
usu1.saludar();
usu2.saludar();


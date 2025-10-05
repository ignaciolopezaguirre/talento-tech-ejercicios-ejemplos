class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

class Admin extends User {
  constructor(email, password, codigo) {
    super(
      email,
      password
    ); /* con la funcion super heredas las propiedades y metodos de la clase padre */
    this.codigo = codigo;
  }
}

const user = new User("user@x.com", 1234);
const admin = new Admin("admin@x.com", 45512, "XLR822");

console.log(user, admin);

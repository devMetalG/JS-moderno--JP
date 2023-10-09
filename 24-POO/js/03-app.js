class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion(){
    return `Cliente: ${this.nombre} con saldo de: $${this.saldo}`;
  }

  static bienvenida(){
    return `Bienvenido al cajero`;
  }

}

// Herencia

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria){
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  static bienvenida(){
    return `Bienvenido al cajero de empresas`;
  }
}

const memo = new Cliente('memo', 1000);
console.log(memo.mostrarInformacion());
console.log(memo);
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());

const empresa = new Empresa('maguito', 10000, '3336662244', 'Cursos');
console.log(empresa.mostrarInformacion());
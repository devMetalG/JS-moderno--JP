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

const memo = new Cliente('memo', 1000);
console.log(memo.mostrarInformacion());
console.log(memo);
console.log(Cliente.bienvenida());
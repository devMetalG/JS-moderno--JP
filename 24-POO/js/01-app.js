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

const Cliente2 = class {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion(){
    return `Cliente: ${this.nombre} con saldo de: $${this.saldo}`;
  }
}

const costal = new Cliente2('Josias', 2000);
console.log(costal.mostrarInformacion());
console.log(costal);
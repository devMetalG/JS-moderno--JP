class Cliente {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const memo = new Cliente('memo', 1000);
console.log(memo);

const Cliente2 = class {
  constructor(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const costal = new Cliente2('Josias', 2000);
console.log(costal);
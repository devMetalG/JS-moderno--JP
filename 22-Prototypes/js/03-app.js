function Cliente(nombre, saldo){
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = 'Gold';
  }else if(this.saldo > 5000){
    tipo = 'Platinum';
  } else {
    tipo = 'Normal';
  }
  return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
return `Nombre: ${this.nombre}, saldo: ${this.saldo}, Tipo cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
}

// Instanciarlo 

const costal = new Cliente('Josias', 11000);
console.log(costal.tipoCliente());
console.log(costal.nombreClienteSaldo());
costal.retiraSaldo(500);
console.log(costal.nombreClienteSaldo());

console.log(costal);
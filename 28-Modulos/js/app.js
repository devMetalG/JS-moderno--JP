import { nombreCliente, ahorro, mostrarInfo, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInfo(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInfoCliente());

const empresa = new Empresa('Maguito', 20000, 'Cursos online');
console.log(empresa);
console.log(empresa.mostrarInfoEmpresa());
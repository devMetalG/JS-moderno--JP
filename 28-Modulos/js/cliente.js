// (function(){
//   console.log('Desde un IIFE');
//   window.nombreCliente = 'Memo';
// })();

export const nombreCliente = "Memo";
export const ahorro = 200;

export function mostrarInfo (nombre, ahorro) {
  return `Cliente ${nombre} - Ahorro ${ahorro}`;
}

export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log('Tiene saldo');
  } else {
    console.log('No tiene saldo');
  }
}
// WeakSet

const weakset = new WeakSet();

const cliente = {
  nombre: 'Memo',
  saldo: 200
}

const nombre = 'Memo';

weakset.add(cliente);

// WeakSet solo acepta objetos
// weakset.add(nombre);
console.log(weakset);
console.log(weakset.has(cliente));

weakset.delete(cliente);
console.log(weakset);
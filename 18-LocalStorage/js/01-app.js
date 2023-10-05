localStorage.setItem('nombre', 'Memo');

const producto = {
  nombre: 'monitor',
  precio: 300
}

const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem('producto',productoString);

const meses = ['Enero','Febrero'];
localStorage.setItem('meses', JSON.stringify(meses));
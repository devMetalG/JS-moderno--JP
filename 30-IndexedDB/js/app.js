let DB;
document.addEventListener('DOMContentLoaded', ()=>{
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 5000);
});

function crmDB(){
  // Crear base de datos v 1.0
  let crmDB = window.indexedDB.open('crm', 1);

  // Si hay error
  crmDB.onerror = function () {
    console.log('Hubo un error al crear la Base de Datos');
  }
  // Si se creo bien
  crmDB.onsuccess = function(){
    console.log('Base de datos creada!');
    DB = crmDB.result;
  }
  // Configuración de la DB
  crmDB.onupgradeneeded = function(e){
    const db = e.target.result;
    const objectStore = db.createObjectStore('crm', {
      keyPath: 'crm',
      autoIncrement: true
    });
    // Definir columnas
    objectStore.createIndex('nombre', 'nombre', {unique: false});
    objectStore.createIndex('email', 'email', {unique: true});
    objectStore.createIndex('telefono', 'telefono', {unique: false});
  }
}

function crearCliente(){
  let transaction = DB.transaction(['crm'], 'readwrite');
  
  // Transaccion complete
  transaction.oncomplete = function(){
    console.log('Transacción completada!');
  }
  // Transaccion error
  transaction.onrror = function(){
    console.log('Fallo la transacción!');
  }

  const objectStore = transaction.objectStore('crm');

  const nuevoCliente = {
    telefono: 4771236969,
    nombre: 'Memo',
    email: 'example@domain.com'
  }
  const peticion = objectStore.add(nuevoCliente);
  console.log(peticion);
}
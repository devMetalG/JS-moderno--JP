document.addEventListener('DOMContentLoaded', ()=>{
  crmDB();
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
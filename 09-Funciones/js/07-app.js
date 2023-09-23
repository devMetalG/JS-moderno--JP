iniciarApp();

function iniciarApp() {
  console.log('Iniciando App...');

  segundaFuncion();
};

function segundaFuncion() {
  console.log('Desde la segunda función');

  usuarioAutenticado('MetalG');
};

function usuarioAutenticado(usuario) {
  console.log('Autenticando.. Espere...');
  console.log('Usuario autenticado exitosamente');
  console.log(`Bienvenido ${usuario}`);
}
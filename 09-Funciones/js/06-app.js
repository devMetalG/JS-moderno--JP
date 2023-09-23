function saludar(nombre = 'desconocido', apellido = '') {
  console.log(`Hola, ${nombre} ${apellido}`)
};

saludar('Memo', 'Franco');
saludar('Memo');
saludar();
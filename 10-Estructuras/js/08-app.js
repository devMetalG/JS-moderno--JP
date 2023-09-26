const autenticado = true;

if (autenticado) {
  console.log('Usuario autenticado');
}

const puntaje = 820;

function revisarPuntaje()  {
  if (puntaje >= 800) {
    console.log('Excelente!');
    return;
  }
  if (puntaje >= 600) {
    console.log('Bueno');
    return;
  }
}

revisarPuntaje();
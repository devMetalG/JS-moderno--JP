const reproductor = {
  cancion: '',
  reproducir: id => console.log(`Reproduciendo canción con ID: ${id}...`), 
  pausar: () => console.log('Pausando...'),
  borrar: id => console.log(`Borrando canción: ${id}`), 
  agregarPlaylist: nombrePlaylist => console.log(`Se agrego la playlist: ${nombrePlaylist}`),
  reproducirPlaylist: nombrePlaylist => console.log(`Esta sonando la Playlist: ${nombrePlaylist}`),

  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Se agrego ${cancion}`);
  },
  get obtenerCancion(){
    console.log(`${this.cancion}`);
  }
};

reproductor.nuevaCancion = 'Demasiado Mexicano';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('Modo Otaku');
reproductor.reproducirPlaylist('Modo Otaku');
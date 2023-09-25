const reproductor = {
  reproducir: function(id){
    console.log(`Reproduciendo canción con ID: ${id}...`);
  }, 
  pausar: function(){
    console.log('Pausando...');
  },
  borrar: function(id){
    console.log(`Borrando canción: ${id}`);
  }, 
  agregarPlaylist: function(nombrePlaylist){
    console.log(`Se agrego la playlist: ${nombrePlaylist}`);
  }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('Modo Otaku');

reproductor.reproducirPlaylist = function(nombrePlaylist){
  console.log(`Esta sonando la Playlist: ${nombrePlaylist}`);
};

reproductor.reproducirPlaylist('Modo Otaku');


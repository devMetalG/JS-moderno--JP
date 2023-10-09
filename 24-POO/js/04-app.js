class Cliente {
  #nombre;
  setNombre(nombre){
    this.#nombre = nombre;
  }
  getNombre(){
    return this.#nombre;
  }
}

const memo = new Cliente();
memo.setNombre('Memo');
console.log(memo.getNombre());
// console.log(memo.#nombre);
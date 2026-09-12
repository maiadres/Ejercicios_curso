
function estaDisponible(producto) {
    if (producto.stock > 0) {
      return true;
     } else {
      return false;
     }
    }
function obtenerInfo(producto){
    return `Poducto: ${producto.nombre} - Stock: ${producto.stock}`;
}

module.exports = {estaDisponible, obtenerInfo};
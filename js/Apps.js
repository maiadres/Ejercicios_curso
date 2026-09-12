const {estaDisponible, obtenerInfo} = require("./productoUtils.js");  


const productoConStock = { nombre: 'Silla de Pino', stock: 10 };
const productoSinStock = { nombre: 'Mesa ratona', stock: 0 };


console.log(obtenerInfo(productoConStock));
console.log('¿Está disponible?', estaDisponible(productoConStock));
console.log('-----------------------------------');
console.log(obtenerInfo(productoSinStock));
console.log('¿Está disponible?', estaDisponible(productoSinStock));
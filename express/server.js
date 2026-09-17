// server.js
 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
 
// Middleware para parsear JSON. ¡Crucial para peticiones POST/PUT!
// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());
 
// --- RUTAS ---
app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
});
 
// GET para obtener todos los productos
app.get('/api/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Silla de Comedor', precio: 5000 },
    { id: 2, nombre: 'Mesa de Roble', precio: 25000 }
  ];
  res.json(productos); // res.json() envía una respuesta en formato JSON.
});
 
// POST para crear un nuevo producto
app.post('/api/productos', (req, res) => {
  // Gracias a app.use(express.json()), podemos leer el cuerpo de la petición.
  const nuevoProducto = req.body; 
  console.log('Producto recibido:', nuevoProducto);
 
  // Aquí iría la lógica para guardar en la base de datos...
  
  // Enviamos una respuesta de éxito con el código 201 (Created).
  res.status(201).json({ 
    mensaje: 'Producto creado con éxito', 
    producto: nuevoProducto 
  });
});
 
// ...
 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
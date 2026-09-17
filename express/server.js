// 1. Requerir el módulo express
const express = require('express');
 
// 2. Crear una instancia de la aplicación
const app = express();
 
// 3. Definir el puerto. Es una buena práctica usar una variable de entorno para producción.
const PORT = process.env.PORT || 4000;
 
// 4. Definir nuestra primera ruta (endpoint)
// Cuando un cliente haga una petición GET a la raíz ('/'), se ejecutará esta función.
app.get('/', (req, res) => {
  // req (request): Objeto con información sobre la petición que llega.
  // res (response): Objeto con métodos para enviar una respuesta al cliente.
  
  // Usamos res.send() para enviar una respuesta simple.
  res.send('¡Bienvenido a la API!');
});
 
// 5. Poner el servidor a escuchar peticiones
app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});
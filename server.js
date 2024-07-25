const http = require('http');
const { format } = require('rut.js'); // Importa la función format de rut.js

const PORT = 80; // Puerto 80 para HTTP
const PORT_SSL = 443; // Puerto 443 para HTTPS

const personas = [
  { rut: '18972631-7', nombres: 'Juan', apellidos: 'Pérez' },
  // Agrega más personas aquí...
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Listado de Personas</h1>');
  res.write('<ul>');

  personas.forEach((persona) => {
    const rutFormateado = format(persona.rut); // Formatea el RUT
    res.write(`<li>${rutFormateado} - ${persona.nombres} ${persona.apellidos}</li>`);
  });

  res.write('</ul>');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});
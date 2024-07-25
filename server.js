const http = require('http');

const PORT = 80;

const personas = [
  { rut: '18972631-7', nombres: 'Juan', apellidos: 'Pérez' },
  // Agrega más personas aquí...
];

const generarTabla = () => {
  let tabla = '<table>';
  tabla += '<tr><th>RUT</th><th>Nombres</th><th>Apellidos</th></tr>';

  personas.forEach((persona) => {
    tabla += `<tr><td>${persona.rut}</td><td>${persona.nombres}</td><td>${persona.apellidos}</td></tr>`;
  });

  tabla += '</table>';
  return tabla;
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Listado de Personas</h1>');
  res.write(generarTabla());
  res.end();
});

server.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});

var http = require('http');
var fs = require('fs');
var path = require('path');

const PORT = 8000;

/**
 * Create Server
 */
http.createServer(function(request, response) {
  var filePath = '.' + request.url;
  var contentType = 'text/html';

  // Gestion des différentes routes
  if (filePath === './' || filePath === './home.html') {
    filePath = './home.html';
  } else if (filePath.endsWith('.css')) {
    contentType = 'text/css';
  } else if (filePath === './about.html') {
    filePath = './about.html';
  } else if (filePath.endsWith('.js')) {
    contentType = 'text/javascript';
  } else {
    serve404(response);
    return;
  }

  fs.readFile(filePath, function(error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        serve404(response);
      } else {
        response.writeHead(500);
        response.end('Erreur du serveur : ' + error.code + ' ..\n');
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
}).listen(PORT);

console.log('Serveur en cours d\'exécution sur le port ' + PORT);

/**
 * Function manage 404
 * @param {*} response 
 */
function serve404(response) {
  fs.readFile(path.join(__dirname, '404.html'), function(error, content) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(content, 'utf-8');
  });
}

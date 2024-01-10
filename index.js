const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // THIS IS WERE WERE WE PUT HTML INTO A WEBSITE DWAQ..........................................
  // if(req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });    
  // }

  // THIS IS WHERE WE PUT JSON IN WEB SERVER.....................................................
  // if(req.url === '/api/user') {
  //   const users = [
  //     { name: 'Earl Requierme', age: 19 },
  //     { name: 'Shania Requierme', age: 18 },
  //     { name: 'Joseph Bejeno', age: 17 }
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  // Extension of file it check if its .html or .js or .png etc
  let extname = path.extname(filePath);

  // Initialize a content type
  let contentType = 'text/html';

  // check the extname variable and set a content type
  switch(extname) {
    case '.js':
      contentType = 'text/js';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'text/png';
      break;
    case '.jpg':
      contentType = 'text/jpg';
      break;  
  }

  // Read File
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code == 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server ruinning on PORT ${PORT}`));

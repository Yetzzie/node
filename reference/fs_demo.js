const fs = require('fs');
const path = require('path');

// Create folder...
  //  fs.mkdir(path.join(__dirname, '/test'), {}, (err)=>{
  //    if (err) throw err;
  //    console.log('folder has been created....');
  //  })


// Create and write file....
  //  fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world and i love you so much', (err)=>{
  //   if (err) throw err;
  //   console.log('file Written has been created');

// file append
  //   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', (err)=>{
  //     if (err) throw err;
  //     console.log('file Written has been created');
  //   }) 
  // });


// Read file
  //   fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)=>{
  //       if (err) throw err;
  //       console.log(data);
  //  });
   
   
// Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err)=>{
  if (err) throw err;
  console.log('File Renamed.....');
});
 
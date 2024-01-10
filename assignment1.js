const fs = require('fs');
const path = require('path')
const EventEmitter = require('events');
const uuid = require('uuid');

// We need to create a folder
// fs.mkdir(path.join(__dirname, '/message'), {}, (err)=>{
//   if(err) throw err;
//   console.log('Done...');
// });

// We gonna write a file Bozo
// fs.writeFile(path.join(__dirname, '/message', 'message.txt'), 'Yooo ma men', (err)=>{
//   if(err) throw err;
//   console.log('message complete..');
// });

// fs.appendFile(path.join(__dirname, '/message', 'message.txt'), 'Musta men', (err)=>{
//   if(err) throw err;
//   console.log('written coplete....');
// });

class send extends EventEmitter {
  sending(msg) {
    this.emit('message', {id: uuid.v4(), msg: msg});
  }
}
const sender = new send();
sender.on('message', (datas) => {
fs.writeFile(path.join(__dirname, '/message', `${datas.id}.txt`), 'Yooo ma men', (err)=>{
  if(err) throw err;
  console.log('message complete..');
});

  fs.appendFile(path.join(__dirname, 'message', 'message.txt'), `${datas.id}: ${datas.msg}\n`, (err)=>{
      if(err) throw err;
      console.log('written coplete....');
    });
});
sender.sending('Heyyyy');



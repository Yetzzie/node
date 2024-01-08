const EventEmitter = require('events');
// uuid generate random id's
const uuid = require('uuid');

class logger extends EventEmitter {
  log(msg) {
    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}
module.exports = logger;
const EventEmitter = require('events');
// uuid generate random id's
const uuid = require('uuid');

class logger extends EventEmitter {
  log(msg) {
    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}

// module.exports = logger;

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('hello World');
logger.log('hi');
logger.log('Hello');
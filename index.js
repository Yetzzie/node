// const person = require('./person.js');
// const person1 = new person('Earl', 19);
// person1.hatdog()

const Logger = require('./logger.js');
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('hello World');
logger.log('hi');
logger.log('Hello');
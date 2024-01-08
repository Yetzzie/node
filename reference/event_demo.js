const eventEmitter = require('events');

// Create class
class MyEmitter extends eventEmitter { };

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Evnet fire!!!'));

// Init Event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

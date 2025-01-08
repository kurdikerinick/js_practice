const events = require('events');
const eventEmmiter = new events.EventEmitter();

const listner1 = function listner1(){
    console.log('listening to l1');
}

const listner2 = function listner(){
    console.log('listening to l2')
}

eventEmmiter.addListener('connect', listner1);
eventEmmiter.on('connect',listner2);
eventEmmiter.emit('connect')
eventEmmiter.removeListener('connection', listner1)
console.log('l1 will not listen')
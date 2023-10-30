var events = require('events');
var em = new events.EventEmitter();

var eventHandler1 = function(){
    console.log('Hello Onkar');
}

var eventHandler2 = function(){
    console.log('Hi Onkar');
}
var k = 'Onkar';

em.on('Greet1',eventHandler1);
em.on('Greet2',eventHandler2);

if (k == 'Onkar') {
    em.emit('Greet1');
}
else{
    em.emit('Greet2');
}

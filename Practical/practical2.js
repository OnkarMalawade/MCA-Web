var events = require('events');
var em = new events.EventEmitter();

function turnOnBulb() {
    console.log('Bulb is on');
}

function turnOffBulb() {
    console.log('Bulb is off');
}

em.on('turnOn', turnOnBulb);
em.on('turnOff', turnOffBulb);

em.emit('turnOn');
em.emit('turnOff');
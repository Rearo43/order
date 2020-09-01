'use strict';

const emitter = require('./lib/events')

// console.time("time");
emitter.on('pickup', onPickup);

// console.time("time");
// emitter.on('in-transit', onTransit);

// console.time("time");
// emitter.on('delivered', onDelivered);

function onPickup(order) {
    const time = new Date();

    console.log('EVENT', {event:'pickup', time, order})
}

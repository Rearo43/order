'use strict';

const emitter = require('..lib/events')

function onPickup(order) {

    setTimeout(() => {
        console.log(`DRIVER: picked up ${ORDER_ID}`);
        emitter.emit('in-transit', payload);
    }, 1000);

    setTimeout(() => {
        console.log(`Delivered`);
        emitter.emit('Delivered', payload);
    }, 1000 * 4); //Three seconds after transit
}

'use strict';

const emitter = require('./lib/events')

emitter.on('pickup', onPickup);
emitter.on('in-transit', onTransit);
emitter.on('delivered', onDelivered);

function onPickup(order) {
    const time = new Date();

    console.log('EVENT', {event:'pickup', time, order});
}

function onTransit(order) {
    const time = new Date();

    console.log('EVENT', {event:'in-transit', time, order})
}

function onDelivered(order) {
    const time = new Date();

    console.log('EVENT', {event:'delivered', time, order})
}

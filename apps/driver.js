'use strict';

const emitter = require('../lib/events')

function onPickup(order) {

    setTimeout(() => {
        console.log(`DRIVER: picked up ${order.orderID}`);
        emitter.emit('in-transit', order);
    }, 1000);
}

function onDelivery(order) {

    setTimeout(() => {
        console.log(`DRIVER: delivered ${order.orderID}`);
        emitter.emit('Delivered', order);
    }, 1000 * 3);
}

emitter.on('pickup', onPickup);
emitter.on('in-transit', onDelivery);

module.exports = onPickup;

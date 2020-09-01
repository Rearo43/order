'use strict';

const emitter = require('./lib/events')

emitter.on('pickup', onEvent('pickup'));
emitter.on('in-transit', onEvent('in-transit'));
emitter.on('delivered', onEvent('delivered'));


function onEvent(eventName) {

    return order => {
        const time = new Date();

        console.log('EVENT', {event:eventName, time, order});
    }
}
// -------------------------Refactor ^^

// function onPickup(order) {
//     const time = new Date();

//     console.log('EVENT', {event:'pickup', time, order});
// }

// function onTransit(order) {
//     const time = new Date();

//     console.log('EVENT', {event:'in-transit', time, order})
// }

// function onDelivered(order) {
//     const time = new Date();

//     console.log('EVENT', {event:'delivered', time, order})
// }

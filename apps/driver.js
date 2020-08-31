'use strict';

const emitter = require('..lib/events')

emitter.on('pickup', onPickup);

function onPickup(order) {

    setTimeout(() => {
        console.log('the stuff in a particular way');
        emitter.emit('in-transit');
    }, 1000);
}


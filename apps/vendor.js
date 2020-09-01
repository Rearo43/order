'use strict';

require('dotenv').config;
let store = process.env.STORE;
const emitter = require('..lib/events')

emitter.on('pickup', onPickup);

function order(order) {

    setTimeout(() => {
        console.log('the stuff in a particular way');
        emitter.emit('pickup', payload);
    }, 1000 * 5);
}

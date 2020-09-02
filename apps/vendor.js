'use strict';

require('dotenv').config;
let store = process.env.STORE;
const emitter = require('../lib/events');
let faker = require('faker');

emitter.on('pickup', onPickup);

function order(order) {

    setTimeout(() => {
        console.log({});
        emitter.emit('pickup', order);
    }, 1000 * 5);
}

const order = {
    store: store,
    orderID: faker.finance.routingNumber(),
    customer: faker.internet.userName(),
    address: faker.address.streetAddress()
}

module.exports = order;

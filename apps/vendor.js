'use strict';

require('dotenv').config;
let store = process.env.STORE;
const emitter = require('../lib/events');
let faker = require('faker');
const onPickup = require('./driver');

const orderData = {
    store: store,
    orderID: faker.finance.routingNumber(),
    customer: faker.internet.userName(),
    address: faker.address.streetAddress()
}

function order() {
    setInterval(() => {
        orderData

        console.log(`ORDER: ${orderData} is ready for pickup.`);
        emitter.emit('pickup', orderData);
    }, 1000 * 5);

}

order();

emitter.on('delivery', (orderInfo) => console.log(`VENDOR: Thank you for delivering ${orderInfo.orderID}`))
emitter.on('pickup', onPickup);

module.exports = order;

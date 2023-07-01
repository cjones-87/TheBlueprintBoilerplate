const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  },
  isFulfilled: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  isShipped: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  shippingAddress: {
    type: Sequelize.STRING,
  },
  shippingCity: {
    type: Sequelize.STRING,
  },
  shippingPostalCode: {
    type: Sequelize.INTEGER,
    validate: {
      is: /^\d{5}(-\d{4})?$/,
    },
  },
  totalPrice: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  paymentMethod: {
    type: Sequelize.ENUM('PAYPAL', 'STRIPE'),
    allowNull: false,
  },
  paymentStatus: {
    type: Sequelize.ENUM('PENDING', 'PAID', 'FAILED'),
    allowNull: false,
    defaultValue: 'PENDING',
  },
});

module.exports = Order;

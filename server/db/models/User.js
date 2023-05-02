const Sequelize = require('sequelize');

const db = require('../db');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  billingAddress: {
    type: Sequelize.STRING,
  },
  shippingAddress: {
    type: Sequelize.STRING,
  },
  billingCity: {
    type: Sequelize.STRING,
  },
  shippingCity: {
    type: Sequelize.STRING,
  },
  billingPostalCode: {
    type: Sequelize.INTEGER,
    validate: {
      is: /^\d{5}(-\d{4})?$/,
    },
  },
  shipppingPostalCode: {
    type: Sequelize.INTEGER,
    validate: {
      is: /^\d{5}(-\d{4})?$/,
    },
  },
  phone: {
    type: Sequelize.STRING,
    validate: {
      is: /^((1-)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4})$/,
    },
  },
  profileAvatar: {
    type: Sequelize.STRING,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;

const Sequelize = require('sequelize');

const db = require('../db');

const Product = db.define('product', {
  brand: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  discount: {
    type: Sequelize.DECIMAL(3, 2),
    defaultValue: 0,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  inventoryQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 100,
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  isFeatured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  taxable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;

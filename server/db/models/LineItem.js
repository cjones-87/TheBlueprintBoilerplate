const Sequelize = require('sequelize');
const db = require('../db');

const LineItem = db.define('lineitem', {
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = LineItem;

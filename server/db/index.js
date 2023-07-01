const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const LineItem = require('./models/LineItem');

Order.belongsToMany(Product, { through: LineItem });
Product.belongsToMany(Order, { through: LineItem });
LineItem.belongsTo(Product);
LineItem.belongsTo(Order);
User.hasMany(Order, { as: 'pastOrders', foreignKey: 'userId' });
User.hasOne(Order, { as: 'currentOrder', foreignKey: 'userId' });
Order.belongsTo(User);

module.exports = { db, User, Product, Order, LineItem };

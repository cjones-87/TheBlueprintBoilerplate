const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 5;

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
  billingCity: {
    type: Sequelize.STRING,
  },
  billingPostalCode: {
    type: Sequelize.INTEGER,
    validate: {
      is: /^\d{5}(-\d{4})?$/,
    },
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

// Instance Methods
User.prototype.correctPassword = function (userPassword) {
  return bcrypt.compare(userPassword, this.password);
};

User.prototype.generateToken = function () {
  if (!process.env.JWT) throw new Error('JWT secret key is missing or not set');
  return jwt.sign({ id: this.id }, process.env.JWT);
};

// Class Methods
User.authenticate = async function ({ identifier, password }) {
  const user = await this.findOne({
    where: {
      [Op.or]: [{ username: identifier }, { email: identifier }],
    },
  });

  if (!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect username, email, &/or password');
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async (token) => {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(+id);
    if (!user) throw 'No user was found with this token';
    return user;
  } catch (err) {
    const error = Error('Token was invalid');
    error.status = 401;
    throw error;
  }
};

// Hooks
const hashPassword = async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

module.exports = User;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Targetcat430#', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

const {
    db_host,
    db_database,
    db_username,
    db_password,
    db_port,
    db_table,
} = require('../config/config');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    db_database,
    db_username,
    db_password, {
    db_host,
    dialect: 'mysql'
}
);

module.exports = sequelize;
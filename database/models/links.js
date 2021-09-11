const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const url = sequelize.define('Url', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING(64),
    longUrl: DataTypes.STRING,
    shortUrl: DataTypes.STRING,
    urlCode: DataTypes.STRING,
    date: DataTypes.STRING,
    // date: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.NOW
    // }
})

module.exports = url;

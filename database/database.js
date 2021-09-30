const Sequelize = require("sequelize")
const connection = new Sequelize('devices', 'root', '661305',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
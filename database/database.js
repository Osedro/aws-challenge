const Sequelize = require("sequelize")
const connection = new Sequelize('devices', 'root', 'dezreais',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
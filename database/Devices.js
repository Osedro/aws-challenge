const Sequelize = require('sequelize')
const connection = require("./database")

const Devices = connection.define('devices', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    },
    color:{
        type: Sequelize.STRING,
        allowNull: false
    },
    partNumber:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Devices.sync({force: false}).then(() => {
    console.log("Tabela devices criada!")
})

module.exports = Devices
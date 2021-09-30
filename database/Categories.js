const Sequelize = require('sequelize')
const connection = require("./database")

const Categories = connection.define('categories', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Categories.sync({force: false}).then(() => {
    console.log("Tabela categories criada!")
})

module.exports = Categories
import Sequelize from 'sequelize'
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: process.env.SSL?true:false
    }
})


export default sequelize
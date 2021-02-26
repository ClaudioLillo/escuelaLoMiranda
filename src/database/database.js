import Sequelize from 'sequelize'
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnathorized: false
        }
    }
})

export default sequelize
import Sequelize from 'sequelize'
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_URL)

export default sequelize
import Sequelize from 'sequelize'
import sequelize from '../database/database'

const Subject = sequelize.define('subject',{
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
}, {
    timestamps: false
})

export default Subject
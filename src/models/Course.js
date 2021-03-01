import Sequelize from 'sequelize'
import sequelize from '../database/database'

const Course = sequelize.define('course',{
    teacher: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
})

export default Course
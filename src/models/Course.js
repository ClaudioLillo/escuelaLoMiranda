import Sequelize from 'sequelize'
import sequelize from '../database/database'

const Course = sequelize.define('course',{
    
}, {
    timestamps: false
})

export default Course
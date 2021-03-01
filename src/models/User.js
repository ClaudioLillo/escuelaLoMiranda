import Sequelize from 'sequelize'
import sequelize from '../database/database'

const User = sequelize.define('user',{
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastName:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    role:{
        type: Sequelize.ENUM('admin', 'student', 'teacher'),
        allowNull: false
    }
}, {
    timestamps: false
})

export default User
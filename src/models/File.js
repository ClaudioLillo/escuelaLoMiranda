import Sequelize from 'sequelize'
import sequelize from '../database/database'

const File = sequelize.define('file',{
    filename: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
    },
}, {
    timestamps: true
})

export default File
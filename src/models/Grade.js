import Sequelize from 'sequelize'
import sequelize from '../database/database'

import Course from './Course'
import User from './User'
import Subject from './Subject'

const Grade = sequelize.define('grade',{
    level: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    letter: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    teacher: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps: false
})

Grade.hasMany(Course, {foreignKey: 'gradeId', sourceKey: 'id'})
Course.belongsTo(Grade, {foreignKey: 'gradeId', sourceKey: 'id'})
Grade.hasMany(User, {foreignkey: 'gradeId', sourceKey: 'id'})
User.belongsTo(Grade, {foreignkey: 'gradeId', sourceKey: 'id'})
Subject.hasMany(Course, {foreignkey: 'subjectId', sourceKey: 'id'})
Course.belongsTo(Subject, {foreignkey: 'subjectId', sourceKey: 'id'})

export default Grade


import Course from '../models/Course'

export const createCourse = async(req, res)=>{
    const  {gradeId, subjectId, userId} = req.body
    try{
        const course = await Course.findOne({
            where: {
                gradeId: gradeId, 
                subjectId: subjectId,
                userId: userId
            }
        })
        if(course){
            return res.status(409).json({msg: 'course exists'})
        }
        else{
            const newCourse = await Course.create({
                teacher,
                gradeId,
                subjectId,
                userId
            }, {
                fields: ['teacher', 'gradeId', 'subjectId','userId']
            })
            if(newCourse){
                return(res.status(201).json({msg: "course created", data: newCourse}))
            }
            else{
                return res.status(500)
            }
        }
    }
    catch(err){
        console.log(err)
        res.status(500)
    }
}

export const getAllCourses = async(req, res)=>{
    try{
        const courses = await Course.findAll()
        if(courses){
            return res.status(200).json(courses)
        }
        else {
            return res.status(404)
        }
        
    }
    catch{
        return res.status(500)
    }
}

export const getCoursesByTeacherId = async(req, res)=>{
    const userId = req.body.userId
    try{
        const courses = await Course.findAll({
            where: {
                userId: userId
            }
        })
        if(courses){
            return res.status(200).json({courses: courses})
        }
        else{
            return res.status(404)
        }
    }
    catch{
        return res.status(500)
    }
}
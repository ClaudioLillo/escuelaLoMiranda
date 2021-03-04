import Course from '../models/Course'

export const createCourse = async(req, res)=>{
    const {teacher, gradeId, subjectId} = req.body
    console.log(teacher)
    console.log(gradeId)
    console.log(subjectId)
    try{
        const course = await Course.findOne({
            where: {
                teacher: teacher,
                gradeId: gradeId, 
                subjectId: subjectId
            }
        })
        if(course){
            return res.status(409).json({msg: 'course exists'})
        }
        else{
            const newCourse = await Course.create({
                teacher,
                gradeId,
                subjectId
            }, {
                fields: ['teacher', 'gradeId', 'subjectId']
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
        const courses = await Subject.findAll()
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
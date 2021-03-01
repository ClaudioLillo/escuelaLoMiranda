import Grade from '../models/Grade'

export const createGrade = async(req, res)=>{
    const {level, letter, teacher} = req.body
    try{
        const user = await Grade.findOne({
            where: {
                level: level,
                letter: letter
            }
        })
        if(user){
            return res.status(409).json({msg: 'grade already exists'})
        }
        else{
            const newGrade = await Grade.create({
                level,
                letter,
                teacher
            }, {
                fields: ['level', 'letter', 'teacher']
            })
            if(newGrade){
                return(res.status(201).json({msg: "grade created"}))
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

export const getAllGrades = async(req, res)=>{
    try{
        const grades = await Grade.findAll()
        if(grades){
            return res.status(200).json(grades)
        }
        return res.status(404)
        
    }
    catch{
        return res.status(500)
    }
}

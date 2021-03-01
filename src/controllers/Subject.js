import Subject from '../models/Subject'

export const createSubject = async(req, res)=>{
    const {name} = req.body
    try{
        const subject = await Subject.findOne({
            where: {
                name: name
            }
        })
        if(subject){
            return res.status(409).json({msg: 'grade already exists'})
        }
        else{
            const newSubject = await Subject.create({
                name
            }, {
                fields: ['name']
            })
            if(newSubject){
                return(res.status(201).json({msg: "subject created", data: newSubject}))
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

export const getAllSubjects = async(req, res)=>{
    console.log("Estoy en la funcion")
    try{
        const subjects = await Subject.findAll()
        if(subjects){
            return res.status(200).json(subjects)
        }
        else {
            return res.status(404)
        }
        
    }
    catch{
        return res.status(500)
    }
}

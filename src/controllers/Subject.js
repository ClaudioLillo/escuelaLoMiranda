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

export const deleteSubject = async(req, res)=>{
    const id = req.body.id
    try{
        let subject = await Subject.findByPk(id)
        if(subject){
            await subject.destroy()
            return res.status(204).json({msg:"subject deleted"})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500)
    }
}

export const updateSubject = async(req, res)=>{
    const {id, name} = req.body
    try{
        let subject = await Subject.findByPk(id)
        if(subject){
            subject.name = name
            await subject.save()
            return res.json({msg: "subject updated"})
        }
        return res.status(404).json({msg: "subject not found"})
    }
    catch(err){
        console.log(err)
        return res.status(500)
    } 
}

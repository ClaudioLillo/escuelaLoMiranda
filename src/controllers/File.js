import File from '../models/File'

export const getFiles = async(req, res)=>{
    try{
        const files = await File.findAll()
        if(files){
            return res.status(200).json({files: files})
        }
        else{
            return res.status(404).json({msg: "Data not found"})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500)
    }
}

export const createFile = async(req, res)=>{
    const {filename, courseId} = req.body
    try{
        let file = await File.create({
                filename,
                courseId
            }, {
                fields: ['filename', 'courseId']
            })
            if(file){
                return(res.status(201).json({msg: "file created"}))
            }
            else{
                return res.status(500)
            }
    }
    catch(err){
        console.log(err)
        res.status(500)
    }
}

// export const getAllUsers = async(req, res)=>{
//     try{
//         const users = await User.findAll()
//         if(users){
//             return res.status(200).json(users)
//         }
//         return res.status(404)
        
//     }
//     catch{
//         return res.status(500)
//     }
    
// }

// export const updateUser = async(req, res)=>{
//     const {id, name, lastName, email, password, role, gradeId} = req.body
//     try{
//         let user = await User.findByPk(id)
//         if(user){
//             user.email = email
//             user.password = password
//             user.role = role
//             user.gradeId = gradeId
//             await user.save()
//             return res.json({msg: "user updated"})
//         }
//         return res.status(404).json({msg: "user not found"})
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500)
//     } 
// }

// export const deleteUser = async(req, res)=>{
//     const id = req.body.id
//     try{
//         let user = await User.findByPk(id)
//         if(user){
//             await user.destroy()
//             return res.status(204).json({msg:"user deleted"})
//         }
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500)
//     }
// }
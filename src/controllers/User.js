import User from '../models/User'

export const getUser = async(req, res)=>{
    const id = req.params.id
    try{
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        if(user){
            return res.status(200).json({user: user})
        }
        else{
            return res.status(404).json({msg: "User not found"})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500)
    }
}

export const createUser = async(req, res)=>{
    const {name, lastName, email, password, role, gradeId} = req.body
    try{
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        if(user){
            return res.status(409).json({msg: 'email is already used'})
        }
        else{
            const newUser = await User.create({
                name,
                lastName,
                email,
                password,
                role, 
                gradeId
            }, {
                fields: ['name', 'lastName', 'email', 'password', 'role', 'gradeId']
            })
            if(newUser){
                return(res.status(201).json({msg: "user created"}))
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

export const getAllUsers = async(req, res)=>{
    try{
        const users = await User.findAll()
        if(users){
            return res.status(200).json(users)
        }
        return res.status(404)
        
    }
    catch{
        return res.status(500)
    }
    
}

export const updateUser = async(req, res)=>{
    const {id, name, lastName, email, password, role, gradeId} = req.body

    try{
        let user = await User.findByPk(id)
        if(user){
            user.name = name
            user.lastName = lastName
            user.email = email
            user.password = password
            user.role = role
            user.gradeId = gradeId
            await user.save()
            return res.json({msg: "user updated"})
        }
        return res.status(404).json({msg: "user not found"})
    }
    catch(err){
        console.log(err)
        return res.status(500)
    } 
}

export const deleteUser = async(req, res)=>{
    const id = req.body.id
    try{
        let user = await User.findByPk(id)
        if(user){
            await user.destroy()
            return res.status(204).json({msg:"user deleted"})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500)
    }
}
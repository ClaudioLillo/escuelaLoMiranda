import User from '../models/User'

export const createUser = async(req, res)=>{
    const {name, lastName, email, password} = req.body
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
                password
            }, {
                fields: ['name', 'lastName', 'email', 'password']
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
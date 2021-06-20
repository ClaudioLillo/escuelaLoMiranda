import User from '../models/User'
const jwt = require('jsonwebtoken')
require('dotenv').config()

export const userLogin = async(req, res) =>{
    const {email, password} = req.body
    console.log(email)
    if(!(email && password)){
        return res.status(400).json({msg: "missing argument"})
    }
    try{
        const user = await User.findOne({
            where:{
                email: email,
                password: password
            }
        })
        if(user){
            const token = jwt.sign({user},process.env.SECRET)
            return res.json({token:token, userId: user.id})
        }
        return res.status(404).json({msg: "No user found"})
    }
    catch(err){
        console.log(err)
        return res.json({msg: "Error"})
    }
}
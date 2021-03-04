import app from './app'
import sequelize from './database/database.js'
import User from './models/User'

const port = process.env.PORT || 8080

sequelize.sync({force: true}).then(()=>{
    app.listen(port, ()=>{
        console.log("listening on port 8080")
        console.log("espero que esto funcione")
    })
})
.catch(err=>{console.log(err)})


const seed = async()=>{
    const name = "Claudio"
    const lastName="Lillo"
    const email="cilillo@uc.cl"
    const password ="password"
    const role = "admin"
    try{
        const newUser = await User.create({
            name,
            lastName,
            email,
            password,
            role
        }, {
            fields: ['name', 'lastName', 'email', 'password', 'role']
        })
        if(newUser){
            console.log("admin created")
        }
    }
    catch(err){
        console.log(err)
    }
}

seed()


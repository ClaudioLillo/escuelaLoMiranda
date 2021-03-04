import app from './app'
import sequelize from './database/database.js'
import User from './models/User'

const port = process.env.PORT || 8080

sequelize.sync({force: false}).then(()=>{
    app.listen(port, ()=>{
        console.log("listening on port 8080")
        console.log("espero que esto funcione")
    })
})
.catch(err=>{console.log(err)})



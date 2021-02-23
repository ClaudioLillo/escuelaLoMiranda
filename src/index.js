import app from './app'

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log("listening on port 8080")
    console.log("espero que esto funcione")
})
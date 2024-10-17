//Foundation
// import
const express = require("express")
const app = express()
// console.log(process)
// if hosting site || dev
const port = process.env.PORT || 3000 

//Route handlers
app.get("/", (req, res) => {
    // console.log(res)
    // res.end("Backend response")
    // do a redirect
    res.redirect("/home") 
})
    // send res at redirect 
app.get("/home", (req, res)=>{
    res.end("This is the way")
})

//Listener
app.listen(port, console.log(`Server running on ${port}`))
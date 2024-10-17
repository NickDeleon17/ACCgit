//Foundation
// import
const express = require("express")
const app = express()
// console.log(process)
// if hosting site || dev
const port = process.env.PORT || 3000 

//Route handlers
app.get("/", (req, res) => {
    res.redirect("/home") 
})

app.get("/home", (req, res)=>{
    res.end("This is the Home page")
})

app.get("/contact", (req, res) =>{
    res.end("This is the Contact page")
})

app.get("/about", (req, res) => {
    res.end("This is the About page")
})
// getting data from a URL:
app.get("/fruit/:doggy" ,(req, res)=>{
    console.log(req.params.doggy)
    res.end(`here is the ${req.params.doggy}`)
})


app.get("/name/:names/bank/:money" , (req, res)=>{
    const {names, money} = req.params

    // const monies = parseFloat(money)
    // if (isNaN(monies)){
    // return res.status(400).send("error my boy") }
    // res.end(`name is ${req.params.names} and you have: ${monies}`)


    // if(isNaN(money)) res.send("not a number jabroni")
    //  res.end(`name is ${req.params.names} and you have: ${req.params.money}`)


    res.end(
        isNaN(money)
        ? "not a number jabroni"
        : `Name is ${req.params.names} and you have ${req.params.money}`
    )
})


app.get('*', (req, res)=>{
    res.end('Does not exist')
})

//Listener
app.listen(port, console.log(`Server running on ${port}`))
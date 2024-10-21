

//Foundation: 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// get data
const data= require("./fakeData.json")
const {response} = require("express");
// body parser if JSON from client
app.use(express.json())
// body parser if URL Encode from client
app.use(express.urlencoded({extended:true}))

let newID = 3;


//Route Handlers:
app.get("/", (req, res) => {
    res.redirect('/api/items')
    res.send('Big ups from the API boi');
  });

//Read
// 1. Route:
app.get('/api/items', (req, res)=>{
// 2. get JSON Data
// 3. get everything back
// 4. Array of objects (list)
    // res.JSON not res.send to expect JSON data
    res.json(data)
})


// Create
// 1. Route
app.post('/api/items', (req, res)=>{
// get data from client
let newItem = {
    id: ++newID,
    // description: "clean my room",
    description: req.body.description,
    is_complete: false
};
data.push(newItem)
// let items = [...data, newItem]
    res.json(data) 

})


// Delete
// 1. Route
// add.delete('api/items:id', (req, res)=>{
//     const itemId = parseInt(req.params.id, 10);
//     const itemIndex = data.findIntex(item => item.id === itemId)
//     if (itemId == -1){
//         return res.status(404).json({error: 'item dont exist'})
//     }
// })


// Listener:
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });



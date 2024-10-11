// convert JSON(which is a string type) to object type

// const jsonString = '{"name" : "Harsh", "age" : 23, "city" : "Greater Noida"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name)
// console.log(jsonObject.age)
// console.log(jsonObject.city)

//convert object to JSON(which is of a string data type)

// const jsonkObject = {
//     name : "Harsh", 
//     age : 23
// };
// const jsonkString = JSON.stringify(jsonkObject)
// console.log(jsonkString)

// console.log(typeof jsonkString)


// Make A server 

const express = require('express')
const app = express()                   // we does store all the fuctionality of express in app or app is an instance of express js

const db  = require('./db');

const mongoose = require('mongoose');

const bodyParser = require('body-parser')
app.use(bodyParser.json());


//const Person = require('./models/Person');
//const person = require('./models/Person');

//const MenuItem = require('./models/MenuItem')



app.get('/', function (req, res) {           // '/'  only one thing(end point) present in the menu(API)
      res.send('/ is a end points in an API')
})

// Writing Post method for person

// app.post('/person', async (req,res)=>{                         // post is used to save data 

//     try{

//         const data = req.body                           // Assuming the request body contains the person data 
//     //  create a new person document using the mongoose model
//         const newPerson = new Person(data);

//     //  save a new person to the databse
//         const response = await newPerson.save();
//         console.log('data Saved');
//         res.status(200).json(response);                         // 200 telling that response from server side is goood 
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'internal Server error'})                   // 500 telling that there is an error from server side

//     }
// })

//GET method to get the person

// app.get('/person', async (req,res) =>{
//     try{

//         const data = await person.find();
//         console.log('data fetched');
//         res.status(200).json(data); 

//     }
//     catch(err){

//         console.log(err);
//         res.status(500).json({error:'internal Server error'})

//     }
// })

// // Writing GET method for MenuItem end Points

// app.get('/menu', async(req,res)=>{
//     try{

//         const data = await MenuItem.find();
//         console.log('Data of MenuItem is fetched');
//         res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).json({error:'internal Sever errror'})

//     }
// })

// // Writing POST method for MenuItem end Points


// app.post('/menu', async(req,res)=>{
//     try{

//         console.log('Request body:', req.body); // Add this line
//         const data = req.body
//         const newMenu = new MenuItem(data);
//         const response = await newMenu.save();
//         console.log('menu item data stored')
//         res.status(200).json(response)
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).json({error: 'Internal Error occur'})
//     }
// })

// app.get('/chicken', function(req,res){
//     res.send("/chicken is a end points in an API")
// })

// app.get('/idli', function(req,res){
//     var customized_idli = {
//         name : 'ravaidli',
//         size : '10 cm dm',
//         isSambhar : true,
//         isCoconut : false
//     }
//     res.send(customized_idli)
// })


// app.post('/items', (req, res) =>{
//     res.send('data is accepted by nodeJs server')
// })


//parameterized API

// app.get('/person/:workType', async (req,res)=>{
//     try{
//         const workType = req.params.workType;           // Extract the worktype from URL parameter
//         if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
//             const response = await Person.find({work:workType});
//             console.log('response fetched')
//             res.status(200).json(response);
//         }
//         else{
//             res.status(500).json({error:'invalid work Type'})
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:'internal server error'})
//     }
// })



// Import The Router files

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use The routers

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(3001, ()=> {            //  3000 is a port number of the server in the local host(own computer), from this line server is active
    console.log("Listening on port 3001 or server 3001 is live")
})                       
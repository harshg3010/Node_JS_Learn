const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels' // replace database_name with your own database name as you wish
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
})

// get the default connection
// mongoose maintains a default connection object representing the MongoDB connection
db = mongoose.connection;

// define event listeners for database connection event listeners define different states of database connection

db.on('connected',()=>{                                      // connected, error, disconnected are the keywords which is understand by mongoDb
    console.log('connected to mongodb server')
})
db.on('error',(err)=>{
    console.error('Mongodb connection error', err);
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

// exports the data base connection

module.exports  = db;

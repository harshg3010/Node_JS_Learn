const mongoose  = require('mongoose')

// Define the Person Schema

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true                        // required meanns client needs to enter their name in the given form or something
    },                                                                      // if leave blank then show error 

    age:{
        type: Number
    },
    work:{
        type: String,
        enum:['chef', 'waiter', 'manager'],                              // out of these three anyone entry is valid in work column in a form
        required: true
    },
    mobile:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true                                    // unique true means that email id of every client needs to be unique
    },
    address:{
        type: String
    }, 
    salary:{
        type: Number,
        required: true
    }
});
 
// create person model

const person = mongoose.model('person', personSchema)
module.exports = person

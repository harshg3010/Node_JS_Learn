const express= require('express');
const router = express.Router();

const Person = require('./../models/Person');
const person = require('./../models/Person');


router.post('/', async (req,res)=>{                         
    try{

        const data = req.body                         
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data Saved');
        res.status(200).json(response);                      
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal Server error'})                   
    }
})

//GET method to get the person

router.get('/', async (req,res) =>{
    try{

        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data); 

    }
    catch(err){

        console.log(err);
        res.status(500).json({error:'internal Server error'})

    }
})


//parameterized API

router.get('/:workType', async (req,res)=>{
    try{
        const workType = req.params.workType;           // Extract the worktype from URL parameter
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
            const response = await Person.find({work:workType});
            console.log('response fetched')
            res.status(200).json(response);
        }
        else{
            res.status(500).json({error:'invalid work Type'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})


// UPDATE operation                                             // Use PUT OR PATCH method to update a data // ':id' can be written as ':prince'
                                                                // Give any name to ':id' like ':prince' its like a variable passed as a parameter
                                                                // client will send an id of a document in a URL to update That document 

 router.put(':id', async (req,res)=>{      

    try{

        const personId = req.params.id;                    // Extract the id from URL parameter
        const updatedPersonData = req.body                 // updated data for the person

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new : true,                                  // means we want to return the updated document 
            runValidators: true,                             // means updated document should be according to mongoose schema which we have defined
        });

        if(!response){
            return res.status(404).json({error:'Person Not Found'})      // used when object id(_id) sent by client is wrong 
        }

        console.log('data Updated ')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Error Occur '})
    }
})

// DELETE A DOCUMENT 

router.delete('/:id', async (req, res)=>{

    try{
        const personId = req.params.id;                    // Extract the id from URL parameter

        const response = await Person.findByIdAndDelete(personId)

        if(!response){
            return res.status(404).json({error:'Person Not Found'})      // used when object id(_id) sent by client is wrong 
        }

        
        console.log('data deleted')
        res.status(200).json({message: 'Person deleted succesfully'})

    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Error Occur '})
    }

})
 

module.exports  = router
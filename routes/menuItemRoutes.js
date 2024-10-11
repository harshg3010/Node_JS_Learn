const express= require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem')



// Writing GET method for MenuItem end Points

router.get('/', async(req,res)=>{
    try{

        const data = await MenuItem.find();
        console.log('Data of MenuItem is fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal Sever errror'})

    }
})

// Writing POST method for MenuItem end Points


router.post('/', async(req,res)=>{
    try{

        console.log('Request body:', req.body); // Add this line
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('menu item data stored')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Error occur'})
    }
})

router.get('/:taste', async (req,res)=>{
    try{
        const taste = req.params.taste;           // Extract the worktype from URL parameter
        if( taste == 'sweet' || taste == 'sour' || taste == 'spicy'){
            const response = await MenuItem.find({taste:taste});
            console.log('response fetched')
            res.status(200).json(response);
        }
        else{
            res.status(500).json({error:'invalid taste Type'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

module.exports = router;


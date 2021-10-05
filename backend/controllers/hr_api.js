const express = require('express');
const router = express.Router();
const HRModel = require('../models/hr_model');


router.get("/viewall", async (req, res)=>{
    try {
        const dbResponse = await HRModel.find({});
        res.status(200).json(dbResponse);
    } catch (error) {
        res.status(400).json("Data not found, Error: "+error.message);
    }
});

router.get("/search/:hrid", async  (req, res)=>{
    const hrId = req.params.hrid;
    try {
        const dbResponse = await HRModel.findById(hrId);
        console.log(dbResponse)
        res.status(200).json(dbResponse);
    } catch (error) {
        res.status(400).json("Invalid mentor id");
    }
});


router.post("/signup", async (req, res)=>{
    const clientData = req.body;
    try {
        if(!clientData.name || !clientData.department || !clientData.email || !clientData.password || !clientData.phoneNumber || !clientData.type){
            res.status(420).json("Please fill the input fields properly");
        }else{
            try {
                const newHR = new HRModel(clientData);
                const dbResponse = await newHR.save();
                res.status(201).json(dbResponse);
            } catch (error) {
                res.status(400).json("User Registration failed. Error: "+error.message);
            }
        }
    } catch (error) {
        res.status(400).json("User Registration failed. Error: "+error.message);
    }  
});


module.exports = router;
const AdminModel = require('../models/admin_model');
const express = require('express');
const router = express.Router();


router.post("/signin", (req, res)=>{
    const adminEmail = "admin";
    const adminPassword = "admin";
    const {email, password} = req.body;
    if(adminEmail==email && adminPassword==password){
        res.status(200).json("Login successfull.");
    }else{
        res.status(400).json("Invalid login creadential.");
    }
});

router.put("/hr-requsts/:hrid", async (req, res)=> {
    const hrId = req.params.hrid;
    try {
        const dbResponse = await AdminModel.updateOne({$push: {hrId: hrId}});
        console.log(dbResponse);
        res.status(200).json("Data save successfully.")
    } catch (error) {
        res.status(400).json("Data not saved. Error: "+error.message);
    }
});


module.exports = router;
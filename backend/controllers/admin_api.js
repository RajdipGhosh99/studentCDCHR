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

router.put("/hr-request/add/", async (req, res)=> {
    const hrId = req.body.hrid;
    try {
        const dbResponse = await AdminModel.updateOne({$push: {hrRequests: hrId}});
        res.status(200).json("Data save successfully.")
    } catch (error) {
        res.status(400).json("Data not saved. Error: "+error.message);
    }
});

router.delete("/hr-request/remove/:hrid", async (req, res)=>{
    const hrid = req.params.hrid;
    try {
        const dbResponse = await AdminModel.updateOne({$pull: {hrRequests: hrid}});
        console.log(dbResponse);
        if(dbResponse.modifiedCount>0){
            res.status(200).json("Data removed successfully.");
        }else{
            throw new Error();
        } 
    } catch (error) {
        console.log(error.message);
        res.status(400).json("Data not removed.");
    }
});


module.exports = router;
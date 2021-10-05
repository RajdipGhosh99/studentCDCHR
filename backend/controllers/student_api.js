const express = require("express");
const HRModel = require("../models/hr_model");
const router = express.Router();
const StudentModel = require('../models/student_model');



router.get("/viewall", async (req, res)=>{
    //View all users
    try {
        const dbResponse = await StudentModel.find({});
        res.status(200).json(dbResponse);
        console.log(dbResponse);
    } catch (error) {
        res.status(400).json("Data not found. Error: "+error.message);
    }
});

router.get("/search/:sid", async (req, res)=> {
    //Search user by Id
    const studentId = req.params.sid;
    try {
        const dbResponse = await StudentModel.findById(studentId);
        console.log(dbResponse);
        res.status(200).json(dbResponse);
    } catch (error) {
        res.status(400).json("Invalid syudent Id");
    }
});

router.get("/search/branch/:name", async (req, res)=> {
    //Search user by branch name
    const studentBranch = req.params.name.toUpperCase();
    try {
        const dbResponse = await StudentModel.find({branch: studentBranch});
        console.log(dbResponse);
        res.status(200).json(dbResponse);
    } catch (error) {
        res.status(400).json("Invalid branch");
    }
});


router.get("/search/skills/:name", async (req, res)=> {
    //Search user by skills
    const skills = req.params.name;
    try {
        const dbResponse = await StudentModel.find({skills: {$in: [skills]}});
        console.log(dbResponse);
        res.status(200).json(dbResponse);
    } catch (error) {
        res.status(400).json("Not found, Error: "+error.message);
    }
});


router.post("/signup", async (req, res)=>{
    const clientData = req.body;
    try {
        if(!clientData.name || !clientData.course || !clientData.branch || !clientData.email || !clientData.password || !clientData.phoneNumber || !type){
            res.status(420).json("Please fill the input fields properly");
        }else{
            try {
                const newStudent = new StudentModel(clientData);
                const dbResponse = await newStudent.save();
                res.status(201).json(dbResponse);
            } catch (error) {
                res.status(400).json("User Registration failed. Error: "+error.message);
            }
        }
    } catch (error) {
        res.status(400).json("User Registration failed. Error: "+error.message);
    }  
});



router.post("/signin", async (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(420).json("Please fill input fields properly.");
    }else{
        try {
            const dbResponse = await StudentModel.findOne({email, password});
            if(dbResponse){
                res.status(200).json(dbResponse);
            }else{
                throw new Error();
            }
        } catch (error) {
            res.status(400).json("Invalid login credential.");
        }
    }
});


router.put("/update/:sid", async (req, res)=>{
    const studentId = req.params.sid;
    const clientData = req.body;
    console.log(clientData);
    try {
        const dbResponse = await StudentModel.findByIdAndUpdate(studentId, clientData, {new: true});
        res.status(200).json(dbResponse);
    } catch (error) {
        res.status(400).json("User not update. Invalid student id");
    }
});

router.delete("/delete/:sid", async (req, res)=>{
    const studentId = req.params.sid;
    try {
        const dbResponse = await StudentModel.findByIdAndDelete(studentId);
       console.log(dbResponse);
       if(dbResponse){
        res.status(200).json("Profile deleted successfully.");
       }else{
           throw new Error();
       }
    } catch (error) {
        res.status(400).json("Invalid student Id.");
    }
});





module.exports = router;
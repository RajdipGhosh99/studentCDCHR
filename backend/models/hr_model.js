const mongoose = require('mongoose');
const validator = require('validator');


const hrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [20, "Name size must be of 20 characters."],
        minlength: [3, "Name length must be at least of 3 characters"]
    },
    companyName: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        default: "default"
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This email id already exists."],
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address.");
            }
        }
    },
    password: {
        type: String,
        trim: true,
        minlength: [6, "Password size must be atleast of 6 character."],
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        validate(value){
            let p = ""+value;
            if(p.length!=10){
                throw new Error("Phone Number size must be of 10 digits.")
            }
        }
    },
    address: {},
    githubLink: {
        type: String
    },
    isGranted: {
        //This field value will be pending/true/false
        type: String,
        default: "pending"
    },
    sortlistedProfiles: {
        type: Array,
    },
    type: {
        type: String,
        default: "hr",
        required: true
    }

});

const HRModel = mongoose.model("hr_model", hrSchema);


module.exports = HRModel;



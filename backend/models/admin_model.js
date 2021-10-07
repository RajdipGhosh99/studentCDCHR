const mongoose = require('mongoose');
const validator = require('validator');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        default: "Admin"
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
        minlength: [5, "Password size must be atleast of 5 character."],
        required: true
    },
    hrRequests: {
        type: [{}]
    },
    type: {
        type: String,
        default: "admin",
        required: true
    }
});

const AdminModel = mongoose.model("admin_model", adminSchema);

module.exports = AdminModel;
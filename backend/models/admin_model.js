const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    hrRequests: {
        type: [{}]
    },
    type: {
        type: String,
        required: true
    }
});

const AdminModel = mongoose.model("admin_model", adminSchema);

module.exports = AdminModel;
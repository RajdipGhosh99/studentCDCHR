const mongoose = require('mongoose');
const dbUrl = `mongodb://localhost:27017/StudentHrDB`;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB connection is successfull.");
}).catch((error)=>{
    console.log("Database connection failed, Error: "+error.message);
});

module.exports = mongoose;
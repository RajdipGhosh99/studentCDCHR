require('dotenv').config();
const express = require('express');
const mongoose = require('./database_con/databasecon');
const studentApi = require('./controllers/student_api');
const hrApi = require('./controllers/hr_api');
const adminApi = require('./controllers/admin_api');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const port = 8000;

const app = express();
app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(cookieParser());
app.use("/student",studentApi);
app.use("/hr", hrApi);
app.use("/admin", adminApi);

app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
})
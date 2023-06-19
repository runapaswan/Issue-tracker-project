/*const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/db';
// mongoose.connect('url') 
mongoose.connect(url);

const db = mongoose.connection;
//mongoose.set('strictQuery', false);


//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   

mongoose.set("strictQuery", false);
db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//const  Task  = require('./models/task');

const mongoose = require('mongoose');
const mongoDB = "mongodb://127.0.0.1:27017/db";
//const userModel = require('./config/mongoose');
// the set flag to false if we want to ovveride the current strictqury behavior and pre
//prare for the new elease.
mongoose.set("strictQuery",false);


mongoose.connect(mongoDB, {
},).then(() => console.log('connected'))
    .catch((err) => { console.log(err); });

//module.exports=db;  //Exports db
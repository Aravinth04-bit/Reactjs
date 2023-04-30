const express=require('express');
const mongoose= require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app= express();
const url='mongodb://localhost:27017/ARCode';

mongoose.connect(url,err =>{
    if(err) throw err;
});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("jwfniur")
})

app.get('/',(req,res)=>{
    res.json({"hdbrf" : "urhiu"})
})

app.listen('8001',()=>{
     console.log("App running")
})
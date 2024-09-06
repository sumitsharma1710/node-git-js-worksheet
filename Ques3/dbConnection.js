const mongoose = require ('mongoose');
const { log } = require('winston');

// Connection with mongodb database

mongoose.connect('mongodb://127.0.0.1:27017/myWork')
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log("Error Occured :" + err);
});

// 

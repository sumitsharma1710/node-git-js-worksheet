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

// creating a schema for my db

const mySchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String
    }
});


// using the schema defining a model

const User = new mongoose.model('user', mySchema);


// fetching data from the database

User.find({})
.then((data)=> {
    data.forEach(el => {
        console.log(el);
    });
    mongoose.connection.close();
})
.catch((err)=> {
    console.log("Error Occured");
    mongoose.connection.close();
})

const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    console.log("helo World");
})

app.listen(8000, ()=>{
    console.log("Server running on port 8000");
})

module.exports = app;
const express = require('express');
const app = express();
const status = require('express-status-monitor');

const fs = require('fs');
app.use(status());

app.get('/',(req,res)=>{
    const stream = fs.createReadStream('./Ques4/sample.txt','utf-8');
    stream.on('data', (dataChunk)=>res.write(dataChunk))
    stream.on('close', ()=>res.end());
})

app.listen(8000, ()=>{
    console.log("Server running on port 8000");
})

module.exports = app;
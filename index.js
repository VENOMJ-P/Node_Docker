const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    console.log("updated");
    res.send("<h1>Hello Docker</h1>")
})

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})
const express = require(`express`);
const app=express();

const mongoose=require(`mongoose`);

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const userModel=require("./userSchema")
const port=3000;
// app.set(`view engine`,`ejs`);

app.listen(port, () => { 
    console.log(`App listening on port  http://localhost:${port}`)
})

app.use('/',(req, res, next)=>{ 
    console.log("midleware works from /");
    next();
})
app.get('/',(req, res)=>{
   res.send("hi sohil ");

    });
    app.get('/create',async (req, res)=>{
        
    let createduser=   await userModel.create({
            name:"sohil",
            email:"@khsnv43",
            username: "khan07"

        })
res.send(createduser);
         });
         
//run when server is busy :  Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process



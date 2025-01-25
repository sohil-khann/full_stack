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
            name:"tanuj",
            email:"@khsfgb43",
            username: "tanushr7"

        })
res.send(createduser);

         });
         ///////////////////////////
        app.get('/read', async (req, res) => {
            // const user = await userModel.findOne({ name: req.params.name });
            const user = await userModel.find();

            if (!user) {
                return res.status(404).send("User not found");
            }
            res.send(user);
        });

        //////////////////////////
        app.get('/update/:name/:forchanging', async (req, res) => {
            const user = await userModel.findOneAndUpdate({ name: req.params.name }, { name:req.params.forchanging},{new:true});
            if (!user) {
                return res.status(404).send("User not found");
            }
            res.send(user);
        });

//////////////////////
        app.get('/delete/:name', async (req, res) => {
            const user = await userModel.findOneAndDelete({ name: req.params.name });
            if (!user) {
                return res.status(404).send("User not found");
            }
            res.send("..User deleted");
        });

        ////////////////
//run when server is busy :  Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process



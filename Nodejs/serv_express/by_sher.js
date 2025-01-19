 // Express.js Framework:
 // Introduction to Express.js.
 // express js ek npm package hai
 // framework
 // manages everything from receiving the request and givving the response
 // Setting up a basic Express application.
 // Routing.
 // Middleware.
 // Request and response handling.
 // Error handling. 
const express = require(`express`);
const app=express();
const path=require(`path`);
path.resolve();
app.use(express.json()); // the data which are came from frontend is human readable thats why we use this method for json format data
app.use(express.urlencoded({ extended: true }));// same like above mentioned./ also known as parsers
app.use(express.static(path.join(__dirname,"public")));

const port=3000;
app.set(`view engine`,`ejs`);

 app.use('/greet',(req,res,next)=>{ //midleware
    console.log("midleware works");
    next();

 })

// app.get() method is used to handle HTTP GET requests.
app.get('/greet',(req,res)=>{
    res.send(`Hello world express`);
});
app.listen(port, () => { //for start a server
    console.log(`App listening on port  http://localhost:${port}`)
  })
  


// step :
// setting up parser for form 
// setting up ejs for pages: 
              //   npm i ejs
            //   setup ejs as a view engine:
                     //  app.set(`view engine`,`ejs`);
// setting up public static files:
              // app.use(express.static(path.join(__dirname,"public")));
 //Dynamic routing 
         // how to get data from frontend to backend route

 app.use('/',(req,res,next)=>{ //midleware
      console.log("midleware works from /");
    //   console.log(path.join(__dirname,"public"));
        next();// it is used for pass to the next function
        
         })
 app.get('/',(req,res)=>{
    
            res.render('index');
        });

app.post('/', (req, res) => {
  console.log(req.body);
 
  
});
// dynamic route
app.get('/profile/:username',(req,res)=>{
    console.log(req.params);
    let UN=req.params.username;
            res.send(`Hello ${UN} welcome to the dynamic route`);
 });
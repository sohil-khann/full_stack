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
const express=require(`express`);
const app=express();
// app.get() method is used to handle HTTP GET requests.
app.get('/',(req,res)=>{
    res.send(`Hello world express`);
});
app.listen(3000);


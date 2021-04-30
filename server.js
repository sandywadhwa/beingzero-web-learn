const express = require('express');
 
const app = express();

// Add a static handler for all static files - CSS/JS/IMG
app.use(express.static(__dirname+"/frontend"));
// app.use(express.static(__dirname+"/morestatic"));

// This is home handler
app.get("/", function(req, res){
    res.send("Welcome to My Basic Site");
})
 
app.get("/resume", function(req, res){
    let fullFilePath = __dirname + "/frontend/html/resume.html";
    res.sendFile(fullFilePath);
});

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

// DEPENDENCIES
const express = require("express");
const plantController = require("./controllers/plantControllers.js")

// CONFIGURATION
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); 
app.use('/plants',plantController)
// ROUTES
app.get('/', (req,res)=>{
  res.send("Welcome to the Botanical Bodega")
});

app.get('*',(req,res)=>{
  req.status(404).send('Page Not Found')
})

// EXPORT
module.exports = app;
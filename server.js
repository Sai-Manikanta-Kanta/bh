const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");

app.use(cors());
app.use(express.json());

const uri = 
'mongodb+srv://kantasaimanikanta:aaykTfqERDe3mlU0@cluster0.1akrvep.mongodb.net/10xinsta';


mongoose.connect(uri).then(()=>
{
    console.log("connected to atlas succesfully")
})
app.use("/",require("./route"));
app.listen(3001,function(){
    console.log("server is running on port 3001")
})
const express = require ('express')

const app = express();

const {MongoClient}= require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");

const port =3000;


console.log("__dirname:",__dirname);

app.use(express.static(__dirname + "/client"));


app.get(`/test`,(req,res,next)=>{

   // res.status(200).send("sucess");
   next();

},(req,res,next)=> {

// res.status(200).send("sucess1");
 next()

},(req,res,next)=>{

   res.status(200).send("sucess2");    

})


async function connect(){
    await client.connect()
   .then((messge)=>{
      console.log("Database connection established");
  
    })
    .catch((error)=>{
      console.log("Database error :",error.message?error.message:error);
    })
    .finally(()=>{
      app.listen(port,()=>{
        console.log(`server running at http://localhost:3000`)
      })
    });
  }
  
  connect();
const express = require ('express')

const app = express();

const {MongoClient}= require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");

const port =3000;

const db =  client.db ('users');
  const collection = db.collection("user_coll");

console.log("__dirname:",__dirname);

app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get(`/test`,(req,res,next)=>{

   // res.status(200).send("sucess");
   next();

},(req,res,next)=> {

// res.status(200).send("sucess1");
 next()

},(req,res,next)=>{

   res.status(200).send("sucess2");    

})

app.post('/submit',(req,res)=>{
let body = req.body;
console.log("body:", body);

req.on('end',async()=> {
  console.log("body :",body);
  const formData = queryString.parse(body);
  console.log('formData :', formData);

//save to database
//insert the data into collection

await collection.insertOne(formData)
.then((message)=> {
  console.log("Document inserted succesfully",message);

})
.catch((error)=>{
  console.log("database iserted error :",error.message?error.message:error)
})
});

res.writeHead(200,{'Content-Type' : 'text/plain'});
res.end("success");

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